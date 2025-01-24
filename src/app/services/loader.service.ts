import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable()
export class LoaderService {
  private readonly loadingSubject = new BehaviorSubject<boolean>(true);
  public readonly loading$ = this.loadingSubject.asObservable();

  public toggle(loadingState: boolean): void {
    this.loadingSubject.next(loadingState);
  }
}
