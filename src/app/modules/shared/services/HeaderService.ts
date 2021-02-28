import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Header } from '../models/classes/util/Header';

@Injectable({
  providedIn: 'root',
})
export class HeaderService {
  private object: Header;
  private objectSource;
  private observableObject: Observable<Header>;

  constructor() {
    this.objectSource = new BehaviorSubject(this.object);
    this.observableObject = this.objectSource.asObservable();
  }
  setHeader(obj: Header) {
    this.objectSource.next(obj);
  }
  getHeader(): Observable<Header> {
    return this.observableObject;
  }
  eraseHeader() {
    this.objectSource.next(null);
  }
}
