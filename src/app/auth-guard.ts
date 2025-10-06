import { CanActivateFn, Router } from '@angular/router';
import { jwtDecode, JwtPayload } from 'jwt-decode';

export const authGuard: CanActivateFn = (route, state) => {
  const router = new Router;
  const token = localStorage['token'] ? localStorage['token'] : '';
  if (token) {
    const decode: any = jwtDecode<JwtPayload>(token);
    // console.log(decode);

    if (((decode.exp * 1000) - Date.now()) < 3600000) {
      // console.log("Valid still");
      return true;
    } else {
      // console.log("Expired");
      router.navigate(['/login']);
    }

  } else {
    router.navigate(['/login']);
  }
  return false;


};
