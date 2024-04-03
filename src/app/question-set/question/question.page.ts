
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { Question } from './question.model';
import {DomSanitizer} from "@angular/platform-browser";

@Component({
  selector: 'app-question',
  templateUrl: './question.page.html',
  styleUrls: ['./question.page.scss'],
})
export class QuestionPage implements OnInit {
  questions : Question[] = [];

  optionSelected: string;

  status: any;

  constructor() {
  }

  ngOnInit() {
    this.questions = history.state.data.question;
  }

  submit() {

    this.questions.forEach(q => console.log(q.answer));

    //For each of the questions, we have to validate the answer.
    //The values range from 0-3 and correspond to the choice in the json file
    //We need to get the truth value of the selected choice

    this.questions.forEach(q =>
      {
        if(q.answer == null){
          q.status = "<h3 style='color:lightgrey' > Unanswered </h3>"
          return;
        }
        let truthValue : string = (q.choices[q.answer].truth);

        if(truthValue as string == "true"){
          q.status = "<h3 style= 'color:forestgreen'> Correct </h3>";
          console.log("Correct answer!");
        } else {
          q.status = "<h3 style='color:darkred''> Incorrect </h3>";
        }
      }

    );

    // console.log(this.questions.forEach(a => a.answer));

  }
//ngModel = optionSelected

  questionGroupChange(value: any, question) {
    console.log(question.choices[this.optionSelected]);

  }
}










