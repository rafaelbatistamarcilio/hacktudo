import { Injectable } from '@angular/core';
import { FormGroup, AbstractControl } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class FormValidationService {

  constructor() { }

  public markFieldsDirty(form: FormGroup): void {
    Object.keys(form.controls).forEach(
      (field) => {

        const control = form.get(field);
        control.markAsDirty();
        if (control instanceof FormGroup) {
          this.markFieldsDirty(control);
        }
      }
    );
  }

  public getFieldClass(field: AbstractControl): Object {
    return {
      'is-valid': this.isFieldValid(field),
      'is-invalid': this.isFieldInvalid(field)
    };
  }

  public isFieldValid(field: AbstractControl): Boolean {
    return this.isDirtyOrTouched(field) && field.valid;
  }

  public isFieldInvalid(field: AbstractControl): Boolean {
    return this.isDirtyOrTouched(field) && field.invalid;
  }

  private isDirtyOrTouched(field: AbstractControl): boolean {
    return field.dirty || field.touched;
  }

  public getError(formField: AbstractControl) {
    const errorList: Array<any> = new Array<string>();

    if (formField.errors) {
      for (const error of Object.keys(formField.errors)) {
        errorList.push(formField.errors[error]);
      }
    }
    return errorList.length > 0 ? errorList[0].message : '';
  }
}
