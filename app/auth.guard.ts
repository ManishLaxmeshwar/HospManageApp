import { CanActivateFn } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  if (sessionStorage.getItem("status")=="active")
  return true;
else return false;
};
