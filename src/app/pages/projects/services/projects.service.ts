import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Project, ProjectsList} from '../../../core/models';
import {Endpoint} from '../enums/endpoint.enum';
import {ProjectsApiService} from '../../../core/api/services/projects-api.service';

@Injectable({
  providedIn: 'root',
})
export class ProjectsService {

  constructor(private projectsApiService: ProjectsApiService) {}

  private get endpoint() {
    return Endpoint.Projects;
  }

  public getProjects(): Observable<Array<ProjectsList>> {
    return this.projectsApiService.get<Array<ProjectsList>>(this.endpoint);
  }

  public getProject(id: string): Observable<Array<Project>> {
    return this.projectsApiService.get<Array<Project>>(`${this.endpoint}/${id}`);
  }
}
