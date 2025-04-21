import {inject, Injectable} from '@angular/core';
import {Endpoint} from '../enum/endpoint.enum';
import {BehaviorSubject, Observable, Subject, switchMap} from 'rxjs';
import {AuthToken, SignUpCredentials} from '../../models';
import {ResourceApiService} from '../../api/services/resource-api.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private resourceApiService = inject(ResourceApiService);

  private get authEndpoint() {
    return Endpoint.SignIn;
  }

  private get signUpEndpoint() {
    return Endpoint.SignUp;
  }

  public auth(username: string, password: string): Observable<AuthToken> {
    return this.resourceApiService.post(this.authEndpoint, { username, password })
  }

  public signUp(username: string, password: string, email: string): Observable<SignUpCredentials> {
    return this.resourceApiService.post(this.signUpEndpoint, { username, password, email })
  }

}
