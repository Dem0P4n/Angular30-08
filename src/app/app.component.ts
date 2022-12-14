import { Component } from '@angular/core';
import { HistoriaImagen } from './modelos/historia-imagen';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public nuevoHistorial: HistoriaImagen = {
    nombre: '',
    detalle: '',
    imagen: '',
  }
  public elementosGuardados: Array<HistoriaImagen> = [];
  public imagen: string = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcWfAWnFH7_EMaELdteQe9CkK_znlj8I-iHg&usqp=CAU';
  public imagen2: string = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9051vGf0VDRdPs4iMnqXmxRgOlMDKwAVGjA&usqp=CAU';
  public imagen3: string = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-gbJ8vil8vZTga21IaoE7xLYByC_ULdQ_rw&usqp=CAU';

  public cambiarNombre(evento: Event): void{
    const elemento = evento.target as HTMLInputElement;
    this.nuevoHistorial.nombre = elemento.value;
  }

  public cambiarDetalle(evento: Event): void{
    const elemento = evento.target as HTMLInputElement;
    this.nuevoHistorial.detalle = elemento.value;
  }

  public cambiarImagen(evento: Event): void{
    const elemento = evento.target as HTMLInputElement;
    this.nuevoHistorial.imagen = elemento.value;
  }

  public guardarHistorial(): void{
    const copia: HistoriaImagen = {
      ...this.nuevoHistorial
    }
    copia.id = this.elementosGuardados.length + 1;
    this.elementosGuardados.push(copia);
    this.nuevoHistorial.nombre = '';
    this.nuevoHistorial.detalle = '';
    this.nuevoHistorial.imagen = '';

  }


}
