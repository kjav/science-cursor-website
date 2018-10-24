import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'cursorValue'})
export class CursorValuePipe implements PipeTransform {
  transform(cursor: number, status: number): string {
    if(status === 1 || status === 2) {
      return '0%';
    }
    return `${Number(cursor * 100).toPrecision(2)}%`;
  }
}
