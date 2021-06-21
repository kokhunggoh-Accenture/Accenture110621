import { Directive } from '@angular/core';
import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export const ValidateEmptyValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
  const name = control.get('name');
  const email = control.get('email');
  const feedback = control.get('feedback');

  if ((typeof name.value!='undefined' && name.value) && (typeof email.value!='undefined' && email.value) && (typeof feedback.value!='undefined' && name.value)){
    return { validatedEmpty: true }
  }
  else
  {
    return null;
  }

  //return (typeof name.value!='undefined' && name.value) && (typeof email.value!='undefined' && email.value) && (typeof feedback.value!='undefined' && name.value) ? { validatedEmpty: true } : null;
};

// export class ValidateEmptyDirective implements Validator {
//   constructor(){}

//   validate(control: AbstractControl): ValidationErrors | null {
//     return ValidateEmptyValidator(control);
//   }
// }