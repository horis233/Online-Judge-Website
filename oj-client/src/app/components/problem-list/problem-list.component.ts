import { Component, OnInit, Inject } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { Problem } from '../../models/problem.model';

@Component({
  selector: 'app-problem-list',
  templateUrl: './problem-list.component.html',
  styleUrls: ['./problem-list.component.css']
})

export class ProblemListComponent implements OnInit {
  problems: Problem[];
  searchTerm: string = '';
  problemsSubscription: Subscription;
  subscriptionInput: Subscription;


  constructor(@Inject('data') private dataService,
              @Inject("input") private input) { }

  ngOnInit() {
    this.getProblems();
    this.getSearchTerm();
  }

  getProblems(): void{
    this.problemsSubscription =
      this.dataService.getProblems().subscribe(
        problems => this.problems = problems
      );
  }

  getSearchTerm(): void {
    this.subscriptionInput = this.input.getInput().subscribe(
      inputTerm => { this.searchTerm = inputTerm; }
    )
  }

  ngOnDestroy() {
    this.problemsSubscription.unsubscribe();
  }

  toTitleCase(str): string {
    return str.replace(/\w\S*/g, function(txt){
      return txt.charAt(0).toLocaleUpperCase() + txt.substr(1);
    });
  }

}
