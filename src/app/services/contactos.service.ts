import { Injectable } from '@angular/core';
import { InitContactos} from '../../contactos';

@Injectable({
  providedIn: 'root'
})
export class ContactosService extends InitContactos {
  constructor() { 
  	super();
    this.load();
  }

    getContactos() {
    	let contactos  = JSON.parse(localStorage.getItem('contactos'));
     	return contactos;
    }
   
    createContacto(contacto) {
     	let contactos = JSON.parse(localStorage.getItem('contactos'));
    	contactos.push(contacto);
     	localStorage.setItem('contactos', JSON.stringify(contactos));
    }

    deleteContacto(id) {
	    let contactos = JSON.parse(localStorage.getItem('contactos'));
	    contactos.splice(id, 1);
      localStorage.setItem('contactos', JSON.stringify(contactos));
	  }

    updateContacto(id, contacto){  
     	let contactos = JSON.parse(localStorage.getItem('contactos'));
		    contactos[id] = contacto;
      	localStorage.setItem('contactos', JSON.stringify(contactos));
    }
}
