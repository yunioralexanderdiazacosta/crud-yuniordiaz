import { Component, OnInit, ViewChild } from '@angular/core';
import { ContactosService } from '../../services/contactos.service';
import {Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-crud-edit',
  templateUrl: './crud-edit.component.html',
  styleUrls: ['./crud-edit.component.css']
})
export class CrudEditComponent implements OnInit {
  @ViewChild("f") form: any;
  contacto;

  constructor(
  	private contactosService: ContactosService, 
  	private router: Router,
  	private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
  	const id = this.activatedRoute.snapshot.params['id'];
  	if(id)
  	{
  		let contactos = this.contactosService.getContactos();
  		this.contacto = contactos[id];
  	}
  	else
  	{
  		this.router.navigate(['/contactos']);
  	}
  	
  }

  actualizarContacto() {
    if (this.form.value) {
     	const id = this.activatedRoute.snapshot.params['id'];
   		this.contactosService.updateContacto(id,this.form.value);
    	this.router.navigate(['/contactos']);
    }
  }

}
