import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { PageService } from '../services/page.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private pageService: PageService, private router: Router) {}

  canActivate(): boolean {
    if (!this.pageService.isLogged) {
      this.router.navigate(['login']);
      return false;
    }
    return true;
  }
}
