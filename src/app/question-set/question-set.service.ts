import { Injectable } from '@angular/core';

import mathQuestions from '../../assets/mathQuestions.json'; //if this is red ignore it thats ok
import englishQuestions from '../../assets/englishQuestions.json'; //if this is red ignore it thats ok

@Injectable({
  providedIn: 'root'
})
export class QuestionSetService {
  constructor() { }

  getQuestions(subject: string) {
    if(subject == 'math')
      return mathQuestions;
     if(subject == 'english')
       return englishQuestions;
    
    return [];
  }

  getQuestion(subject: string, id: string) {
    if(subject == 'math')
      return { ...mathQuestions.find(q => q.id === id)};
     
    if(subject == 'english')
    return { ...englishQuestions.find(q => q.id === id)};
  }
}
