import {
  ActivatedRouteSnapshot,
  CanActivate,
  GuardResult,
  MaybeAsync, Router,
  RouterStateSnapshot,
} from '@angular/router';
import {inject, Injectable} from '@angular/core';
import {AuthStorageService} from '../auth/services/auth-storage.service';

@Injectable({
  providedIn: 'root',
})
export class LoggedInGuard implements CanActivate {

  private router: Router = inject(Router);
  private authStorage = inject(AuthStorageService);

  constructor() {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): any {
    if (this.authStorage.get()) {
      return true;
    }
    else this.router.navigate(['/auth']);
  }
}
