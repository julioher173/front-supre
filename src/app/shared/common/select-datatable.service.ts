// import { HttpClient } from '@angular/common/http';
// import { Injectable } from '@angular/core';
// import { Observable } from 'rxjs';
// import { map } from 'rxjs/operators';
// import { BaseService } from './base.service';

// @Injectable({
//   providedIn: 'root',
// })
// export class SelectDatatableService extends BaseService {
//   constructor(protected http: HttpClient) {
//     super(http, '');
//   }

//   uploadFiles(table: string, files: File[], consecutivo?: number, obj?: any): Observable<any> {
//     if (files.length > 0) {
//       const formData = new FormData();

//       for (let i = 0; i < files.length; i++) {
//         formData.append('files', files[i], files[i]['name']);
//       }
//       formData.append("consecutivo", JSON.stringify(consecutivo));
//       formData.append("obj", JSON.stringify(obj));

//       return this.http.post(`/${table}/dropzone`, formData, {
//         withCredentials: true,
//         reportProgress: true,
//         observe: 'events',
//       });
//     }
//   }

//   searchSelect(
//     table: string,
//     search: string = '',
//     dependency?: any
//   ): Observable<any> {
//     search = search == null ? '' : search;
//     return this.http.post(
//       `/${table}/select`,
//       { search, ...dependency },
//       this.options
//     );
//   }

//   searchSelect2(
//     idConfig: number,
//     search: string = '',
//     dependency?: any
//   ): Observable<any> {
//     search = search == null ? '' : search;
//     return this.http.post(
//       `/general/select2`,
//       { idConfig, search, ...dependency },
//       this.options
//     );
//   }

//   searchDatatable(
//     table: string,
//     dataTablesParameters: any,
//     filtros: any
//   ): Observable<any> {
//     return this.http.post(
//       `/${table}/datatable`,
//       { ...dataTablesParameters, ...filtros },
//       this.options
//     );
//   }
// }
