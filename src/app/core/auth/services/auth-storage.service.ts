import {Inject, Injectable} from '@angular/core';
import {AbstractStorageService} from '../../../shared/services/storage.service';
import {AUTH_STORAGE_PREFIX} from '../../providers/storage.providers';
import {BehaviorSubject, of, switchMap} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthStorageService extends AbstractStorageService {

  private tokenStateSubject = new BehaviorSubject(null);
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
    this.setItem(item);
    this.actualizeTokenState();
  }

  public remove(): void {
    this.deleteItem();
    this.actualizeTokenState();
  }

  public actualizeTokenState() {
    this.tokenStateSubject.next(null);
  }

}
