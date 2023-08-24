import { Component, OnInit } from '@angular/core';
import { TerseroServiceService } from '../../shared/tersero-service.service';
import { ConfirmationService, MessageService,ConfirmEventType } from 'primeng/api';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [ConfirmationService, MessageService]
})
export class HomeComponent implements OnInit {

  userArray:any[] = [];

  tipo_iden: string = '';
  iden : string = '';
  primer_nombre: string = '';
  segundo_nombre: string = '';
  primer_apellido: string = '';
  segundo_apellido: string = '';
  razon_social: string = '';
  id_cuenta_fiscal: string = '';
  fecha_expedicion: any;
  fecha_nacimiento: any;
  direccion: string = '';
  email: string = '';
  celular: string = '';
  estado:boolean = true;

  productDialog: boolean = false;
  tipo_iden_object = [
    { name: 'Cedula Ciudadania', code: 'CC' },
    { name: 'Tarjeta identidad', code: 'TI' },
    { name: 'Registro civil', code: 'Rc' },
    { name: 'Pasaporte', code: 'PS' }
  ]

  constructor(private terseroService:TerseroServiceService,
    private confirmationService: ConfirmationService, 
    private messageService: MessageService) { }

  ngOnInit() {
    this.obternerUser()
  }



  obternerUser(){
    this.terseroService.listar().subscribe((data:any) => {
      // console.log(data['response'])
      if(data['response'].length > 0){
        this.userArray = data['response']
      } else {
        this.userArray = []
      }

      
    })
  }

  agregarUser(){
    let objeto = {
      tipo_iden:this.tipo_iden,
      iden: this.iden,
      primer_nombre: this.primer_nombre,
      segundo_nombre: this.segundo_nombre,
      primer_apellido: this.primer_apellido,
      segundo_apellido: this.segundo_apellido,
      razon_social: this.razon_social,
      id_cuenta_fiscal: parseInt(this.id_cuenta_fiscal),
      fecha_expedicion: this.fecha_expedicion.toISOString(),
      fecha_nacimiento: this.fecha_nacimiento.toISOString(),
      direccion: this.direccion,
      email: this.email,
      celular: this.celular,
      estado: this.estado
    }
    
    this.terseroService.createUSer(objeto).subscribe((data:any)=>{
      this.obternerUser();
    this.cancelarGuardar()
    })
  }

  cancelarGuardar(){
    this.tipo_iden = ''
    this.iden = ''
    this.primer_nombre = ''
    this.segundo_nombre = ''
    this.primer_apellido = ''
    this.segundo_apellido = ''
    this.razon_social = ''
    this.id_cuenta_fiscal = ''
    this.fecha_expedicion = ''
    this.fecha_nacimiento = ''
    this.direccion = ''
    this.email = ''
    this.celular = ''
    this.productDialog = false;
  }

  darDeBaja(index:number,objeto:any){
    this.confirmationService.confirm({
      message: `Desea Desactivar o Eliminar al usuario ${objeto.primer_nombre}?`,
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.actualizarEstado(index,objeto.id,false) 
      },
      reject: (type: ConfirmEventType) => {
          switch (type) {
              case ConfirmEventType.REJECT:
                  this.eliminarUser(index,objeto.id)
                  break;
          }
      }
  });
  }

  confirm1() {
    this.confirmationService.confirm({
        message: 'Are you sure that you want to proceed?',
        icon: 'pi pi-exclamation-triangle',
        accept: () => {
            this.messageService.add({ severity: 'info', summary: 'Confirmado', detail: 'Usuario Desactivo' });
        },
        reject: (type: ConfirmEventType) => {
            switch (type) {
                case ConfirmEventType.REJECT:
                    this.messageService.add({ severity: 'error', summary: 'Confirmado', detail: 'Usuario Eliminado' });
                    break;
            }
        }
    });
}

  eliminarUser(index:number,id:number){
    this.terseroService.deleteUser(id).subscribe((data:any) => {
      this.eliminarusuarioArray(index)
      this.obternerUser();
      this.messageService.add({ severity: 'error', summary: 'Rejected', detail: 'Usuario Eliminado' });
    })
  }

  actualizarEstado(index:number,id:number, estado:any){
    this.terseroService.updeteEstadoUser(id, estado).subscribe((data:any)=>{
      this.messageService.add({ severity: 'info', summary: 'Confirmed', detail: 'Usuario Desactivo' });
      this.eliminarusuarioArray(index)
      this.obternerUser();
    })
  }

  eliminarusuarioArray(index:number){
    this.userArray.splice(index, 1);
  }

  openNew() {
    this.productDialog = true;
    
}

}
