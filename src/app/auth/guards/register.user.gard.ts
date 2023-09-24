import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from "@angular/router";
import { GLOBAL, UserINFO } from "../global.config";


@Injectable()
export class RegisterUserGuard implements CanActivate { 
    protected static userSrting = 'userinfo';
    constructor(public router: Router) {
    }

    public static isIDExpired() : boolean {
        let info = this.userInfo;
        if (!info) {
           return true;
        } else {
            GLOBAL.currentUserInfo = !(GLOBAL.currentUserInfo) ?  info :  GLOBAL.currentUserInfo;  // reset 
        }
        let globalinfo = GLOBAL.currentUserInfo;
        return ((info && globalinfo ) && (JSON.stringify(globalinfo) == JSON.stringify(info))) ? false : true; 
    }
    public static set userInfo(info: UserINFO) {
        GLOBAL.currentUserInfo = info;
        sessionStorage.setItem(RegisterUserGuard.userSrting, JSON.stringify(info)); 
    }

    public static get userInfo(): UserINFO {
        let userinfo = sessionStorage.getItem(RegisterUserGuard.userSrting);
      return  userinfo ? JSON.parse(userinfo) : undefined;
    }

    public static removeUserInfo() {
        GLOBAL.currentUserInfo = undefined;
        sessionStorage.removeItem(RegisterUserGuard.userSrting);
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

        let res = false;
        if (!RegisterUserGuard.isIDExpired())
        {
            res = true;
        }
        if (!res)
            // this.router.navigate(['/auth/register/mobile-number'], { queryParams: { returnUrl: state.url } });
            this.router.navigate(['/auth/register/mobile-number']);
        return res;
    }
}