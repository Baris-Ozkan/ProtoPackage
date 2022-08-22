import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noSAllU'
})
export class NoSAllUPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): string {
    let str = value.trim();
    str = str.replace(/\s/g, "");
    str = str.toUpperCase();

    return str;
  }

}
