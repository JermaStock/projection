import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reduceCount',
})
export class CountPipe implements PipeTransform {

  transform(value: number, maxLimit: number = 100): string {
    if (!value || !maxLimit || maxLimit < 0) return `${value}`;
    return value >= maxLimit ? `${maxLimit - 1}+` : `${value}`;
  }

}
