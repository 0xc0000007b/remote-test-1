import {FormControl} from "@angular/forms";
import {Observable} from "rxjs";

export class TestValidators {
  static restrictedAge(control: FormControl): {[key: string]: boolean} {
    if(['v@gma.com', 'test@mail.ru', 'someuser@mail.ru'].includes(control.value)) {
      return {
        restrictedAge: true,
      }
    }
    return null;
  }
  static password(control: FormControl): {[key: string]: boolean} {
    if(['12345678', 'azaza123', 'password12', 'abcdefgdsd', 'пароль123','пароль', 'password'].includes(control.value)) {
      return {
        goto: true,
      }
    }
    return null;
  }

  static uniqEmail(control: FormControl): Promise<any> | Observable<any> {
    return new Promise( resolve => {
      setInterval(() => {
        if(control.value === 'asyncemail@gmail.com'){
          resolve({uniqEmail: true})
        }else  {
         resolve(null)
        }
      }, 1000)
    })

  }

}


