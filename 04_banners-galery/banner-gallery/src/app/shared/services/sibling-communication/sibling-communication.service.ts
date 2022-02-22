import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SiblingCommunicationService {
  constructor() {}

  actualAnimationType = '';

  sendAnimationType = new Subject<string>();

  selectAnimationType(e: string) {
    this.sendAnimationType.next(e);
  }
}
