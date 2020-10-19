import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { PageService } from '../services/page.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
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
        'vale2@yahoo.com.mx',
        [
          Validators.required,
          Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$'),
        ],
      ],
      password: ['123456', [Validators.required]],
    });
  }

  cargarSorage() {
    if (localStorage.getItem('data')) {
      // this.listas = JSON.parse(localStorage.getItem('data'));
    }
  }

  onSubmit() {
    if (this.forma.valid) {
      this.pageService.login(this.forma.value).subscribe((resp) => {
        console.log(resp);
        console.log(resp['token']);
        const varToken = {
          token: resp['token'],
        };
        localStorage.setItem('data', JSON.stringify(varToken));
        this.pageService.isLogged = true;
        this.router.navigate(['/inicio']);
      }),
        (err) => console.warn(err);
    }
  }
}
