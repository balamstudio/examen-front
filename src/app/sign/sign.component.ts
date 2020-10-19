import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { PageService } from '../services/page.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign',
  templateUrl: './sign.component.html',
  styleUrls: ['./sign.component.scss'],
})
export class SignComponent implements OnInit {
  forma: FormGroup;
  constructor(
    private fb: FormBuilder,
    private pageService: PageService,
    private router: Router
  ) {
    this.creaFormulario();
  }

  ngOnInit(): void {}
  creaFormulario() {
    this.forma = this.fb.group({
      email: [
        '',
        [
          Validators.required,
          Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$'),
        ],
      ],
      password: ['', [Validators.required]],
    });
  }

  onSubmit() {
    if (this.forma.valid) {
      this.pageService.crearUsuario(this.forma.value).subscribe((resp) => {
        console.log(resp);
        this.pageService.isLogged = true;
        this.router.navigate(['/inicio']);
      }),
        (err) => console.log('err.error');

      // this.forma.reset({
      //   mail: '',
      //   password: '',
      // });
    }
  }
}
