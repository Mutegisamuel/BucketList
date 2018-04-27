import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class DataService {

  private Goals = new BehaviorSubject(['The initial goal', 'Another silly life goal']);
  goal = this.Goals.asObservable();

  constructor() { }

  changeGoal(goal) {
    this.Goals.next(goal);
  }

}
