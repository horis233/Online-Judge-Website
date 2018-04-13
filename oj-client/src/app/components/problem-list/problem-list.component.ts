import { Component, OnInit, Inject } from '@angular/core';
import { Problem } from 'app/data-structure/problem';
//import { Subscription }from 'rxis/Subscription';

@Component({
  selector: 'app-problem-list',
  templateUrl: './problem-list.component.html',
  styleUrls: ['./problem-list.component.css']
})
export class ProblemListComponent implements OnInit {

  problems: Problem[] = [];
  //subscriptionProblems: Subscription;
  constructor(@Inject('data') private dataService) { }

  ngOnInit() {
    this.dataService.getProblems()
      .subscribe(problems => this.problems = problems );
  }

}
