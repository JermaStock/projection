import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

export interface Project {
  project: string,
  data: string,
}

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  constructor(
    private readonly http: HttpClient,
  ) { }

  getProjects(): Observable<Array<string>> {
    return this.http.get<Array<string>>('http://178.130.42.30:8080/projects');
  }

  getProject(projectId: string | undefined): Observable<Array<Project>> | never {
    if (!projectId) throw new Error('Undefined project id!');
    return this.http.get<Array<Project>>(`http://178.130.42.30:8080/projects/${projectId}`)
  }
}
