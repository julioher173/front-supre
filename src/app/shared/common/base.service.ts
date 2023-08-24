import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

export class BaseService {
  private path: string = '';
  protected options: any = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
    withCredentials: true,
  };

  constructor(protected http: HttpClient, path: string) {
    this.path = path;
  }

  public create(obj: any): Observable<any> {
    return this.http.post(`${this.path}`, { ...obj }, this.options);
  }

  public get(id: number): Observable<any> {
    return this.http.get(`${this.path}/${id}`, this.options);
  }

  public update(id: number, obj: any): Observable<any> {
    return this.http.put(`${this.path}/${id}`, { ...obj }, this.options);
  }

  public delete(id: number): Observable<any> {
    return this.http.delete(`${this.path}/${id}`, this.options);
  }
}
