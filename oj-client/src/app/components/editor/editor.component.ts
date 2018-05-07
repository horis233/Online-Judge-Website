import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { DataService } from './../../services/data.service';


declare var ace: any;

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit {

  editor: any;

  language: string = 'Java';

  languages: string[] = ['Java', 'Python'];
  sessionId: string;
  defaultContent = {
    'Java': `public class Example {
public static void main(String[] args) {
    // Type your Java code here
    }
}`,
    'Python': `class Solution:
   def example():
       # Write your Python code here`
  }
  output: string = '';
  constructor(@Inject('collaboration') private collaboration,
              @Inject('data') private dataService,
              private route: ActivatedRoute,) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      // this.problem = this.data.getProblem(+params['id']);
      this.sessionId = params['id'];
      this.initEditor();
      this.collaboration.restoreBuffer();
    });
  }

  initEditor(): void {

    this.editor = ace.edit('editor');
    this.editor.setTheme("ace/theme/dracula");
    document.getElementsByTagName('textarea')[0].focus();
    this.editor.setFontSize(18);
    this.resetEditor();

    this.editor.$blockScrolling = Infinity;

    // this.editor.getSession().setMode('ace/mode/java');
    // this.editor.setValue(this.defaultContent['Java']);
    this.resetEditor();
    this.collaboration.init(this.editor, this.sessionId);
    this.editor.lastAppliedChange = null;

    // registering change callback
    this.editor.on('change', (e) => {
      console.log('Editor Component: ' + JSON.stringify(e));
      if (this.editor.lastAppliedChange != e) {
        this.collaboration.change(JSON.stringify(e));
      }
    });

    // registering cursor change callback
    this.editor.getSession().getSelection().on('changeCursor', () => {
      let cursor = this.editor.getSession().getSelection().getCursor();
      console.log('CLIENT! CURSOR' + JSON.stringify(cursor));
      this.collaboration.cursorMove(JSON.stringify(cursor));
    });

    this.collaboration.restoreBuffer();
  }

  resetEditor(): void {
    console.log('Resetting editor');
    this.editor.getSession().setMode(`ace/mode/${this.language.toLowerCase()}`);
    this.editor.setValue(this.defaultContent[this.language]);
  }

  setLanguage(language: string) {
    this.language = language;
    // add a map for language and js file name
    // this.editor.getSession().setMode(`ace/mode/${language.toLowerCase()}`);
    // this.editor.setValue(this.defaultContent[language]);
    this.resetEditor();
  }

  submit() {
    let userCodes = this.editor.getValue();
    console.log('submit....' + userCodes);
    const data = {
      userCodes: userCodes,
      lang: this.language.toLocaleLowerCase()
    };

    this.dataService.buildAndRun(data)
      .then(res => this.output = res.text);
  }
}
