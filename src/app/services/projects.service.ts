import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {combineLatest, Observable} from 'rxjs';
import {LoaderService} from './loader.service';

export interface Project {
  project: string,
  data: string,
}

const API = 'http://178.130.42.30:8080/projects';

@Injectable({
  providedIn: 'root',
})
export class ProjectsService {
  private readonly http = inject(HttpClient);

  getProjects(): Observable<Array<string>> {
    return this.http.get<Array<string>>(API);
  }

  getProject(projectId: string | undefined): Observable<Array<Project>> | never {
    if (!projectId) throw new Error('Undefined project ID!');
    return this.http.get<Array<Project>>(`${API}/${projectId}`);
  }
}
