import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'any'
})
export class LoaderService {
  private readonly loadingSubject = new BehaviorSubject<boolean>(false);
  public readonly loading$ = this.loadingSubject.asObservable();

  public toggle(loadingState: boolean): void {
    this.loadingSubject.next(loadingState);
  }

  public get loadingState() {
    return this.loadingSubject.getValue();
  }
}
