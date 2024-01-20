import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderBy',
})
export class OrderByPipe implements PipeTransform {
  transform(array: any[], args: { property: string; order: string }): any[] {
    const { property, order } = args;
    return array.sort((a, b) => {
      const valueA =
        typeof a[property] === 'string'
          ? a[property].toUpperCase()
          : a[property];
      const valueB =
        typeof b[property] === 'string'
          ? b[property].toUpperCase()
          : b[property];
      return order === 'asc' ? valueA - valueB : valueB - valueA;
    });
  }
}
