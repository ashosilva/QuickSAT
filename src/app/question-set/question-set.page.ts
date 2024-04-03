import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { QuestionSet } from './question-set.model';
import { QuestionSetService } from './question-set.service';

@Component({
  selector: 'app-question-set',
  templateUrl: './question-set.page.html',
  styleUrls: ['./question-set.page.scss'],
})
export class QuestionSetPage implements OnInit {
  questionSet: QuestionSet;
  constructor(private questionSetService: QuestionSetService, private router: Router) {
    this.questionSet = questionSetService.getQuestions(history.state.data.subject)
    console.log(this.questionSet)
  }

  ngOnInit() {
    console.log(history.state.data.subject)
  }

  startTest() {
    const question = this.questionSet
    this.router.navigate(['/question-set/question'], { state: { data: { question } } })
  }

}
