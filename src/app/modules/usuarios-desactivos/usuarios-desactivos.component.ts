import { Component, OnInit } from '@angular/core';
import { ConfirmEventType, ConfirmationService, MessageService } from 'primeng/api';
import { TerseroServiceService } from 'src/app/shared/tersero-service.service';

@Component({
  selector: 'app-usuarios-desactivos',
  templateUrl: './usuarios-desactivos.component.html',
  styleUrls: ['./usuarios-desactivos.component.css'],
  providers: [ConfirmationService, MessageService]
})
export class UsuariosDesactivosComponent implements OnInit {

  userArray:any[] = [];
  messages1 = 'No hay usuario desactivos'
  constructor(private terseroService:TerseroServiceService,
    private confirmationService: ConfirmationService, 
    private messageService: MessageService) { }

  ngOnInit() {
    this.obternerUser()
  }

  obternerUser(){
    this.terseroService.listarDesactivos().subscribe((data:any) => {
      // console.log(data['response'])
      if(data['response'].length > 0){
        this.userArray = data['response']
      }

    
    })
  }

  darDeBaja(index:number,objeto:any){
    this.confirmationService.confirm({
      message: `Desea Desactivar o Eliminar al usuario ${objeto.primer_nombre}?`,
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.actualizarEstado(index,objeto.id,true) 
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
      this.obternerUser();
      this.messageService.add({ severity: 'error', summary: 'Rejected', detail: 'Usuario Eliminado' });
      this.eliminarusuarioArray(index)
    })
  }

  actualizarEstado(index:number,id:number, estado:any){
    this.terseroService.updeteEstadoUser(id, estado).subscribe((data:any)=>{
      this.messageService.add({ severity: 'info', summary: 'Confirmed', detail: 'Usuario Activo' });
      this.eliminarusuarioArray(index)
      this.obternerUser();
    })
  }

  eliminarusuarioArray(index:number){
    this.userArray.splice(index, 1);
  }


}
