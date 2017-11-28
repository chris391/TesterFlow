import {FormControl} from "@angular/forms";

export class CustomValidators {

  static validateEmail(form : FormControl){
    let pattern: RegExp = /\S+@\S+\.\S+/;
    return pattern.test(form.value) ? null : {
      validateEmail: {
        valid: false
      }
    }
  }
}
