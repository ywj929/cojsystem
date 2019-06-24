import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Problem } from 'src/app/models/problem.model';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-problem-detail',
  templateUrl: './problem-detail.component.html',
  styleUrls: ['./problem-detail.component.css']
})
export class ProblemDetailComponent implements OnInit {
  problem : Problem;
  constructor(
    private route : ActivatedRoute,
    private dataService : DataService
  ) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.problem = this.dataService.getProblem(+params['id']);
    });
  }

}
