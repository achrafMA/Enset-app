import {
  ActivatedRouteSnapshot,
  GuardResult,
  MaybeAsync,
  Router,
  RouterStateSnapshot
} from '@angular/router';
import {AuthService} from "../services/auth.service";
import {Injectable} from "@angular/core";
@Injectable({providedIn:'root'})
export class AuthGuard  {

  constructor(private authService : AuthService, private router : Router) {
  }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): MaybeAsync<GuardResult> {
    if(this.authService.isAuthenticated){
      return  true;
    } else {
      this.router.navigateByUrl("/login")
      return false;
    }
  }
}