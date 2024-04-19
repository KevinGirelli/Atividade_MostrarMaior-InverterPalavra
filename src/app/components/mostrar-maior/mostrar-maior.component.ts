import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-mostrar-maior',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './mostrar-maior.component.html',
  styleUrl: './mostrar-maior.component.scss'
})
export class MostrarMaiorComponent {
  num1!: number;
  num2!: number;
  num3!: number;
  maior!: number;

  mostrarMaior() {
    if (!isNaN(this.num1) && !isNaN(this.num2) && !isNaN(this.num3)) {
      this.maior = Math.max(this.num1, this.num2, this.num3);
    } else {
      alert("Por favor, insira números válidos!");
    }
  }

}
