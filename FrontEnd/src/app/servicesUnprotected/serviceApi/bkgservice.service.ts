import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { HandleError, HttpErrorHandler } from './http-error-handler.services';

@Injectable({
  providedIn: 'root'
})
export class BkgserviceService {

  private url = `${environment.url1}`;
  private handleError: HandleError;
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  redirectUrl: string;
  constructor(
    private http: HttpClient,
    private httpErrorHandler: HttpErrorHandler
  ) {
    this.handleError = this.httpErrorHandler.createHandleError('ProductService')
  }

  insertData(fields: any) {
    return this.http.post(this.url + "/binsertData", fields)
      .pipe(
        catchError(this.handleError('bInserDataMonze', null)))
  }

  getData() {
    return this.http.get(this.url + "/bgetdata");
  }

  deleteData(id: string) {
    return this.http.get(this.url + "/bdeletedata/" + id);
  }

  editValue(id: string) {
    return this.http.get(this.url + "/beditData/" + id);
  }

  updateData(id: string, value: any) {
    return this.http.post(this.url + "/bupdateData/" + id, value);
  }
}
