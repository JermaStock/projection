import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

export interface Project {
  project: string,
  data: string,
}

const API_BASE_PATH = '/music-data-storage/api';

@Injectable({
  providedIn: 'root',
})
export class ProjectsService {
  private readonly http = inject(HttpClient);

  getProjects(): Observable<Array<string>> {
    return this.http.get<Array<string>>(`${API_BASE_PATH}/projects`);
  }

  getProject(projectId: string | undefined): Observable<Array<Project>> | never {
    if (!projectId) throw new Error('Undefined project ID!');
    return this.http.get<Array<Project>>(`${API_BASE_PATH}/projects/${projectId}`);
  }
}
