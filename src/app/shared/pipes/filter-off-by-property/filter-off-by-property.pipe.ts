import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterOffByProperty',
})
export class FilterOffByPropertyPipe<T> implements PipeTransform {
  transform(value: T[], property: never): T[] {
    return value.filter((item) => item[property]);
  }
}
