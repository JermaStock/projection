import {inject, Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Project, ProjectsList, SimpleResponse} from '../../../core/models';
import {Endpoint} from '../enums/endpoint.enum';
import {AuthStorageService} from "../../../core/auth/services/auth-storage.service";
import {HttpHeaders} from "@angular/common/http";
import {ResourceApiService} from '../../../core/api/services/resource-api.service';

@Injectable({
  providedIn: 'root',
})
export class ProjectsService {
  private authStorage = inject(AuthStorageService);
  private resourceApiService = inject(ResourceApiService);

  private token: string | null = null;
  private headers: HttpHeaders | {} = {};

  private get endpoint() {
    return Endpoint.Projects;
  }

  private get versionEndpoint(): string {
    return 'version';
  }

  public getProjects(): Observable<Array<ProjectsList>> {
    this.getHeader();
    // TODO: Попросить бэкера вылечить голову со слэшами
    return this.resourceApiService.get<Array<ProjectsList>>(`${this.endpoint}/`, this.headers);
  }

  public getProject(id: string): Observable<Array<Project>> {
    this.getHeader();
    return this.resourceApiService.get<Array<Project>>(`${this.endpoint}/${id}`, this.headers);
  }

  // TODO: Вынести запрос в отдельный сервис (после внедрения HTTP интерспектора )
  public getVersion() {
    this.getHeader();
    return this.resourceApiService.get<SimpleResponse>(`${this.versionEndpoint}`, this.headers);
  }

  private getHeader() {
    this.token = this.authStorage.get();
    if (this.token) {
      this.headers = new HttpHeaders({ 'Authorization': `Bearer ${this.token}` });
    }
  }
}
