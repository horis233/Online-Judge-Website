import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { DataService } from './../../services/data.service';
import { Subscription} from 'rxjs/Subscription';


declare var ace: any;
declare var jQuery:any;

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit {


  randomSID:string="1";
	joinSID:string="";

	validJoinSID:boolean=false;
	redirectProblemMsg:boolean=false;

	numUsersSub:Subscription;
	numUsers:string="1";




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
              @Inject('auth') private auth,
              private route: ActivatedRoute) { }

  ngOnInit() {

    // this.collaboration.restoreBuffer();
    this.numUsersSub = this.collaboration.getRoomUserNum().subscribe((num:string)=>{
      console.log(num);
      this.numUsers=num;
    });
    this.initEditor();
  }

  initEditor(): void {

    this.editor = ace.edit('editor');
    this.editor.setTheme("ace/theme/dracula");
    document.getElementsByTagName('textarea')[0].focus();
    this.editor.setFontSize(18);
    this.resetEditor();

    this.generateRandomSessionId();
    this.sessionId=this.randomSID;

    this.editor.$blockScrolling = Infinity;

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
    this.resetEditor();
  }

  generateRandomSessionId():void {
  	this.route.params.subscribe(input => {
	    const nickname = this.auth.getProfile().nickname;
	    this.randomSID = input["id"]+'-'+nickname + Math.floor((Math.random() * 10000) + 10000);
	 	console.log(this.randomSID);
  	});
  }

  joinRoom():void {
  	this.collaboration.disconnect();
  	this.resetEditor();
	  this.sessionId=this.joinSID;
	  this.randomSID=this.joinSID;
    this.collaboration.init(this.editor,this.sessionId);
    this.editor.lastAppliedChange = null;
    this.collaboration.restoreBuffer();
  }

  checkJoinSID():void {
  	console.log(this.joinSID.match(/\d+-\w+\d+/));

  	this.route.params.subscribe(input => {

	  	if (this.joinSID.match(/\d+-\w+\d+/g)) {
	  		let hidx= this.joinSID.indexOf('-');
	  		let pid=this.joinSID.substring(0,hidx);

	  		console.log(pid+' '+input["id"]);
	  		if (pid==input["id"]) {
	  			this.validJoinSID=true;
	  			this.redirectProblemMsg=false;
	  		}
	  		else {
	  			this.validJoinSID=false;
	  			this.redirectProblemMsg=true;
	  		}
	  	} else {
	  			this.validJoinSID=false;
	  			this.redirectProblemMsg=false;
	  	}
  	});
  }

  submit() {
    let userCodes = this.editor.getValue();
    console.log('submit....' + userCodes);
    const data = {
      userCodes: userCodes,
      lang: this.language.toLocaleLowerCase()
    };

    this.dataService.buildAndRun(data)
      .then(res => {
        this.output = res.text;
        jQuery('#submitBtn').button('reset');
      });
  }
}
