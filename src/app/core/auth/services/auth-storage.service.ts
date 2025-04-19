import {Inject, Injectable} from '@angular/core';
import {AbstractStorageService} from '../../../shared/services/storage.service';
import {AUTH_STORAGE_PREFIX} from '../../providers/storage.providers';

@Injectable({
  providedIn: 'root'
})
export class AuthStorageService extends AbstractStorageService {

  constructor(
    @Inject(AUTH_STORAGE_PREFIX) public prefix: string
  ) {
    super();
  }

  public get(): string | null {
    return super.getItem();
  }

  public set(item: string | null): void {
    return this.setItem(item);
  }

  public remove(): void {
    return this.deleteItem();
  }

}
