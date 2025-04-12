import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {HttpMethod} from '../../enums';

export abstract class AbstractApiService {

  protected constructor(private http: HttpClient) {}

  protected abstract apiUri: string;

  public get<T>(path: string): Observable<T> {
    return this.request(HttpMethod.Get, path, {});
  }

  public post<T>(path: string, body: Object = {}): Observable<T> {
    return this.request(HttpMethod.Post, path, body);
  }

  public put<T>(path: string, body: Object = {}): Observable<T> {
    return this.request(HttpMethod.Put, path, body);
  }

  public patch<T>(path: string, body: Object = {}): Observable<T> {
    return this.request(HttpMethod.Patch, path, body);
  }

  public delete<T>(path: string, body?: Object): Observable<T> {
    return this.request(HttpMethod.Delete, path, body);
  }

  protected request<T>(
    method: HttpMethod,
    path: string,
    body: Object = {},
  ): Observable<T> {
    return this.http.request<T>(method, `${this.apiUri}/${path}`, body);
  }
}
