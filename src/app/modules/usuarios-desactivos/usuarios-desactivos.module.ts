import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsuariosDesactivosComponent } from './usuarios-desactivos.component';
import { ToastModule } from 'primeng/toast';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { CalendarModule } from 'primeng/calendar';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { RadioButtonModule } from 'primeng/radiobutton';
import { CheckboxModule } from 'primeng/checkbox';
import { InputTextModule } from 'primeng/inputtext';
import { DialogModule } from 'primeng/dialog';
import { UsuarioDesactivoRoutingModule } from './usuario-desactivo-routing.module';


@NgModule({
  declarations: [UsuariosDesactivosComponent],
  imports: [CommonModule,
    UsuarioDesactivoRoutingModule,
    DialogModule,
    InputTextModule,
    CheckboxModule,
    RadioButtonModule,
    ButtonModule,
    FormsModule,
    DropdownModule,
    CalendarModule,
    ConfirmDialogModule,
    ToastModule]
})
export class UsuariosDesactivosModule { }