import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-mostrar-imagen',
  templateUrl: './mostrar-imagen.component.html',
  styleUrls: ['./mostrar-imagen.component.scss']
})
export class MostrarImagenComponent {
  @Input() public imagen: string = '';
  private imagenError: string = 'https://i0.wp.com/www.homosensual.com/wp-content/uploads/2022/08/joder-esto-si-es-cine-meme.jpg?resize=600%2C368&quality=80&ssl=1';
  public cambiarImagenError(): void{
    this.imagen = this.imagenError;
  }

}
