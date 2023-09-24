import { AbstractControl, ValidatorFn } from '@angular/forms';

export function blankSpaceValidator(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const value = control.value;
    
    // Check if the input contains only blank spaces
    if (value && value.trim().length === 0) {
      return { whitespace: true };
    }

    // Check if the input matches the pattern for a proper name
    const namePattern = /^[A-Za-z\s]+$/; // Allows only letters and spaces
    if (value && !namePattern.test(value)) {
      return { invalidName: true };
    }
    const endSpace = / $/;
    const startSapce = /^\s/;

    if(value && (endSpace.test(value) || startSapce.test(value)))
    {
      return { whitespace: true };
    }

    return null; // Validation passed
  };
}

export function justBlankSpaceValidator(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const value = control.value;
    
    // Check if the input contains only blank spaces
    if (value && value.trim().length === 0) {
      return { whitespace: true };
    }

    const endSpace = / $/;
    const startSapce = /^\s/;

    if(value && (endSpace.test(value) || startSapce.test(value)))
    {
      return { whitespace: true };
    }

    return null; // Validation passed
  };
}