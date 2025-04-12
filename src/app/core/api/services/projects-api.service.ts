import {Inject, Injectable} from '@angular/core';
import {PROJECTS_API_URI} from '../tokens/url.providers';
import {HttpClient} from '@angular/common/http';
import {AbstractApiService} from './abstract-api.service';

@Injectable({
  providedIn: 'root'
})
export class ProjectsApiService extends AbstractApiService {
  constructor(
    @Inject(PROJECTS_API_URI) protected apiUri: string,
    http: HttpClient,
  ) {
    super(http);
  }
}
