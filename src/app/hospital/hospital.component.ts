import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-hospital',
  templateUrl: './hospital.component.html',
  styleUrls: ['./hospital.component.scss'],
})
export class HospitalComponent implements OnInit {
  forma: FormGroup;
  registrosTmp = [];
  registros = [];
  niveles = ['verde', 'naranja', 'rojo'];

  constructor(private fb: FormBuilder) {
    this.creaFormulario();
  }

  ngOnInit(): void {}

  creaFormulario() {
    this.forma = this.fb.group({
      nombre: ['', [Validators.required]],
      nivelField: ['', [Validators.required]],
    });
  }

  ordena() {
    this.registros = [];
    const tmpNormal = this.registrosTmp.filter(
      (listData) => listData.nivel === 'verde'
    );
    const tmpMedio = this.registrosTmp.filter(
      (listData) => listData.nivel === 'naranja'
    );
    const tmpUrgente = this.registrosTmp.filter(
      (listData) => listData.nivel === 'rojo'
    );
    if (tmpUrgente.length > 0) {
      this.porFecha(tmpUrgente);
    }
    if (tmpMedio.length > 0) {
      this.porFecha(tmpMedio);
    }
    if (tmpNormal.length > 0) {
      this.porFecha(tmpNormal);
    }

    console.log(this.registros);
  }

  porFecha(arr) {
    const arrTmp = arr.sort((a, b) => {
      return a.myDate - b.myDate;
    });
    arrTmp.forEach((elem) => {
      this.registros.push(elem);
    });
  }

  onSubmit() {
    if (this.forma.valid) {
      const nombre: string = this.forma.get('nombre').value;
      const nivel: string = this.forma.get('nivelField').value;
      const myDate: Date = new Date();

      const registroObj = { nombre, nivel, myDate };

      this.registrosTmp.push(registroObj);
      // console.log(this.registros);
      this.ordena();
      this.forma.reset({
        nivelField: '',
      });
    }
  }
}
