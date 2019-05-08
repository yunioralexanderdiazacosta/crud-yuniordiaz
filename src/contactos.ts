export class InitContactos {
  load() {
    if(localStorage.getItem('contactos') === null || localStorage.getItem('contactos') == undefined) {
      let contactos = [
        {
          razon_social:'Foodsys, S.A',
          rif:'J-190202033',
          persona: 'Leonardo Bastidas',
          ubicacion: 'La puente, Estado Bolivar',
          tlf_1: '0291-9012300',
          tlf_2: '0426-891011'
        }, 

        {
          razon_social:'Inversiones Carmona S.A.',
          rif:'J-920102334',
          persona: 'Luis Cardenas',
          ubicacion: 'Av. Alirio Ugarte Pelayo, Maturín Estado Monagas',
          tlf_1: '0426-9012331',
          tlf_2: ''
        }
       
      ];

      localStorage.setItem('contactos', JSON.stringify(contactos));
      return 
    } else {
      console.log('contactos...');
    }
  }
}