import { Injectable } from '@angular/core';
import {ProjectsApiService} from '../../api/services/projects-api.service';
import {Endpoint} from '../enum/endpoint.enum';
import {Observable} from 'rxjs';
import {HttpClient} from "@angular/common/http";
import {AuthToken} from '../../models';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private apiService: ProjectsApiService, http: HttpClient) { }

  private get endpoint() {
    return Endpoint.SignIn;
  }

  public auth(username: string, password: string): Observable<AuthToken> {
    return this.apiService.post(this.endpoint, { username, password })
  }
}
