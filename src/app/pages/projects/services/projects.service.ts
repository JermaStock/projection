import {inject, Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Project, ProjectsList} from '../../../core/models';
import {Endpoint} from '../enums/endpoint.enum';
import {ProjectsApiService} from '../../../core/api/services/projects-api.service';
import {AuthStorageService} from "../../../core/auth/services/auth-storage.service";
import {HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root',
})
export class ProjectsService {
  private authStorage = inject(AuthStorageService);
  private projectsApiService = inject(ProjectsApiService);

  private token: string | null = null;
  private headers: HttpHeaders | {} = {};

  constructor() {
  }

  private get endpoint() {
    return Endpoint.Projects;
  }

  public getProjects(): Observable<Array<ProjectsList>> {
    this.getHeader();
    // TODO: Попросить бэкера вылечить голову со слэшами
    return this.projectsApiService.get<Array<ProjectsList>>(`${this.endpoint}/`, this.headers);
  }

  public getProject(id: string): Observable<Array<Project>> {
    this.getHeader();
    return this.projectsApiService.get<Array<Project>>(`${this.endpoint}/${id}`, this.headers);
  }

  private getHeader() {
    this.token = this.authStorage.get();
    if (this.token) {
      this.headers = new HttpHeaders({ 'Authorization': `Bearer ${this.token}` });
    }
  }
}
