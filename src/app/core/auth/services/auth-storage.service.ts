import {Inject, Injectable} from '@angular/core';
import {AbstractStorageService} from '../../../shared/services/storage.service';
import {AUTH_STORAGE_PREFIX} from '../../providers/storage.providers';
import {of, Subject, switchMap} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthStorageService extends AbstractStorageService {

  private tokenStateSubject = new Subject();
  public tokenState$ = this.tokenStateSubject.asObservable().pipe(
    switchMap(() => of(this.get())),
  );

  constructor(
    @Inject(AUTH_STORAGE_PREFIX) public prefix: string
  ) {
    super();
  }

  public get(): string | null {
    return super.getItem();
  }

  public set(item: string | null): void {
    this.tokenStateSubject.next(void 0);
    return this.setItem(item);
  }

  public remove(): void {
    this.tokenStateSubject.next(void 0);
    return this.deleteItem();
  }

}
