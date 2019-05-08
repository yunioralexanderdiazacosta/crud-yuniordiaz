import { Component, OnInit, ViewChild  } from '@angular/core';
import { ContactosService } from '../../services/contactos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crud-form',
  templateUrl: './crud-form.component.html',
  styleUrls: ['./crud-form.component.css']
})
export class CrudFormComponent implements OnInit {
  @ViewChild("f") form: any;

  contactos;
  contacto;
   
  constructor(
  	private contactosService: ContactosService,
  	private router: Router) { }

  ngOnInit() {
  	this.contactos = this.contactosService.getContactos();
  }

  guardarContacto()
  {
    if (this.form.value) {
      let contacto = {
        razon_social: this.form.value.razon_social,
        rif: this.form.value.rif,
        persona: this.form.value.persona,
        ubicacion: this.form.value.ubicacion,
        tlf_1: this.form.value.tlf_1,
        tlf_2: this.form.value.tlf_2,
      }
    	this.contactos.push(contacto);
      this.contactosService.createContacto(contacto);
    	this.router.navigate(['/contactos']);
    }
  }
}
