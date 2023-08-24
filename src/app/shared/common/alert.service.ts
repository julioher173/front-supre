import { Injectable } from '@angular/core';
import Swal, { SweetAlertIcon, SweetAlertResult } from 'sweetalert2';

@Injectable({
  providedIn: 'root',
})
export class AlertService {
  public Swal = Swal;
  private Toast = this.Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer);
      toast.addEventListener('mouseleave', Swal.resumeTimer);
    },
  });

  constructor() { }

  public info(message: string) {
    setTimeout(() => {
      this.Toast.fire({ icon: 'info', title: message });
    }, 200);
  }

  public success(message: string) {
    setTimeout(() => {
      this.Toast.fire({ icon: 'success', title: message });
    }, 200);
  }

  public warning(message: string) {
    setTimeout(() => {
      this.Toast.fire({ icon: 'warning', title: message });
    }, 200);
  }

  public error(message: string) {
    setTimeout(() => {
      this.Toast.fire({ icon: 'error', title: message });
    }, 200);
  }

  public confirmation(message: string): Promise<SweetAlertResult> {
    return this.Swal.fire({
      icon: 'question',
      title: message,
      showConfirmButton: true,
      showCloseButton: true,
      showCancelButton: true,
      confirmButtonText: 'SI',
      cancelButtonText: 'No',
      cancelButtonColor: '#d33',
    });
  }

  public loading(message: string) {
    this.Swal.fire({
      html: `<img src="../../assets/images/loading.gif" alt="">`,
      title: message,
      showConfirmButton: false,
      allowOutsideClick: false,
    });
  }

  public close() {
    this.Swal.close();
  }

  public toast(icon: SweetAlertIcon, title: string, text: string) {
    this.Toast.fire({
      icon,
      title,
      text,
    });
  }

  public sweet(icon: SweetAlertIcon, title: string, text: string) {
    this.Swal.fire(
      title,
      text,
      icon
    )
  }
}
