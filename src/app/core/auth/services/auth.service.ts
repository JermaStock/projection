import {inject, Injectable} from '@angular/core';
import {ProjectsApiService} from '../../api/services/projects-api.service';
import {Endpoint} from '../enum/endpoint.enum';
import {BehaviorSubject, Observable, Subject, switchMap} from 'rxjs';
import {AuthToken, SignUpCredentials} from '../../models';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiService: ProjectsApiService = inject(ProjectsApiService);

  private get authEndpoint() {
    return Endpoint.SignIn;
  }

  private get signUpEndpoint() {
    return Endpoint.SignUp;
  }

  public auth(username: string, password: string): Observable<AuthToken> {
    return this.apiService.post(this.authEndpoint, { username, password })
  }

  public signUp(username: string, password: string, email: string): Observable<SignUpCredentials> {
    return this.apiService.post(this.signUpEndpoint, { username, password, email })
  }

}
