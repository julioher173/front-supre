// import { Injectable } from '@angular/core';
// import FileSaver from 'file-saver';

// /**
//  Este servicio nos ayudara a descargar archivos provenientes del backend
//  */

// @Injectable({
//   providedIn: 'root',
// })
// export class FileService {
//   //definimos los mime types de una manera mas sencilla
//   FILE_TYPE = {
//     txt: 'text/plain',
//     pdf: 'application/pdf',
//     xls: 'application/vnd.ms-excel',
//     excel: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
//     zip: 'application/zip, application/octet-stream',
//   };

//   bytes;

//   //Se recibe los datos del archivo, el nombre con el que sera guardado y el tipo de archivo
//   downloadFile(data, filename, type) {
//     const blob = new Blob([data], { type: this.FILE_TYPE[type] });
//     const file = new File([blob], filename, { type: this.FILE_TYPE[type] });
//     //this.sizeFile(file);

//     FileSaver.saveAs(file, filename);
//   }

//   downloadFileUrl(url, filename) {
//     FileSaver.saveAs(url, filename);
//   }

//   sizeFile(bytes) {
//     bytes = bytes.length;
//     if (bytes >= 1073741824) {
//       bytes = (bytes / 1073741824).toFixed(2) + ' GB';
//     } else if (bytes >= 1048576) {
//       bytes = (bytes / 1048576).toFixed(2) + ' MB';
//     } else if (bytes >= 1024) {
//       bytes = (bytes / 1024).toFixed(2) + ' KB';
//     } else if (bytes > 1) {
//       bytes = bytes + ' bytes';
//     } else if (bytes == 1) {
//       bytes = bytes + ' byte';
//     } else {
//       bytes = '0 bytes';
//     }
//     return bytes;
//   }
// }
