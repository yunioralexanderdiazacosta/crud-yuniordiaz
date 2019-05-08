import { Component, OnInit } from '@angular/core';
import { ContactosService } from '../../services/contactos.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-crud-view',
  templateUrl: './crud-view.component.html',
  styleUrls: ['./crud-view.component.css']
})
export class CrudViewComponent implements OnInit {
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

}
