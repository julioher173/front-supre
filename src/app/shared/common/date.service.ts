import { Injectable } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class DateService {
  constructor() {}

  splitDate(date: string = '') {
    return date ? date.split('T')[0] : '';
  }

  formatDateToDatepicker(date: string = '') {
    return { formatted: this.splitDate(date) };
  }

  getDateFromDatepicker(field: AbstractControl) {
    return field.value ? field.value.formatted : null;
  }

  compareDate(f1: Date, f2: Date, compare: string) {
    f1.setHours(0, 0, 0, 0);
    f2.setHours(0, 0, 0, 0);

    switch (compare) {
      case '>':
        return f1 > f2;
      case '<':
        return f1 < f2;
      case '>=':
        return f1 >= f2;
      case '<=':
        return f1 <= f2;
    }
  }
}
