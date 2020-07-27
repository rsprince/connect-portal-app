import { AuthService } from '../services/auth.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, Route } from '@angular/router';
import { Observable } from 'rxjs';
 
@Injectable()
export class AuthGuard implements CanActivate {
 
  constructor(private authService: AuthService, private router: Router) {
  }
 
  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    let path = state.url.substring(1, state.url.length);      // path returns with initial back slash
    path = path.substring(path.indexOf("/") + 1, path.length);  // path to item in subdirectory
    // console.log("Trying to activate: ", path);
    if (this.authService.isAuthorized(path)) {
      // console.log("Can activate:", path);
      return true;
    }
 
    // 'Page Not Found'
    this.router.navigate(['/404']);
    return false;
  }
 
}

// canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
//   if (this.authService.isAuthenticated()) {
//       return true;
//   }

//   // navigate to login page, can save redirect url and use after authenticating.
//   this.router.navigate(['/login']);
//   return false;
// }
 
 