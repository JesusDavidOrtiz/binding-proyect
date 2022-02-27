import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'binding-proyect';

  name!: string;
  edad!: number;
  public mostrar:boolean = false; 

  Opersona: {
    nombre: string,
    edad: number,
  }

  persona: any=[];

  constructor() {
    this.Opersona = { nombre:'', edad:0}
  }
    
  /**
 * agregar
 */
public agregar() {
  this.persona.push(
    { nombre: this.Opersona.nombre }
  )
}
  

  
}


