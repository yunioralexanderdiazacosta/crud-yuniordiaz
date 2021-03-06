import { Component, OnInit } from '@angular/core';
import { ContactosService } from '../../services/contactos.service';

@Component({
  selector: 'app-crud-list',
  templateUrl: './crud-list.component.html',
  styleUrls: ['./crud-list.component.css']
})
export class CrudListComponent implements OnInit {
  contactos;
  constructor(private contactosService: ContactosService) { }

  ngOnInit() {
  	this.contactos = this.contactosService.getContactos();
  }

  eliminarContacto(id)
  {
    if(confirm('Esta seguro de que desea eliminar el contacto?'))
    {
      this.contactos.splice(id, 1);
      this.contactosService.deleteContacto(id);
    }
  }
}
