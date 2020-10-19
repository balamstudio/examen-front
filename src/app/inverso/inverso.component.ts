import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-inverso',
  templateUrl: './inverso.component.html',
  styleUrls: ['./inverso.component.scss'],
})
export class InversoComponent implements OnInit {
  forma: FormGroup;
  numeros = [];
  invertidos = [];
  constructor(private fb: FormBuilder) {
    this.creaFormulario();
  }

  ngOnInit(): void {}
  creaFormulario() {
    this.forma = this.fb.group({
      numeros: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
      valnumeros: [''],
      valinvertidos: [''],
    });
  }

  agrega() {
    const valor = this.forma.get('numeros').value;
    this.numeros.push(valor);
    this.forma.reset({
      numeros: '',
      valnumeros: this.numeros,
      valinvertidos: '',
    });
  }

  onSubmit() {
    // const reversed = numeros.reverse();
    this.invertidos = [];
    this.numeros.forEach((elem) => {
      this.invertidos.unshift(elem);
    });
    this.forma.reset({
      numeros: '',
      valnumeros: this.numeros,
      valinvertidos: this.invertidos,
    });
  }
}
