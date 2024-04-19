import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-inverter-palavra',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './inverter-palavra.component.html',
  styleUrl: './inverter-palavra.component.scss'
})
export class InverterPalavraComponent {
  palavra!: string;
  invertida!: string;

  inverter(){
    this.invertida = this.palavra.split('').reverse().join('');
  }
}
