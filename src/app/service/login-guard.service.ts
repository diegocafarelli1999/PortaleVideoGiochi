import { Injectable } from '@angular/core';
import { Router, RouterStateSnapshot, ActivatedRouteSnapshot, UrlTree, CanActivate } from '@angular/router';
import { Observable, from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginGuardService implements CanActivate {

  constructor(private route: Router) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    if (sessionStorage.getItem('user') !== null && sessionStorage.getItem('user') !== '') {
      return true
    } else {
      this.route.navigateByUrl('/login');
      return false;
    }


  }
}
