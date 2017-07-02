import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatCurrency' //camelCase
})
export class FormatCurrencyPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return new Intl.NumberFormat('pt-br', {style: 'currency', currency: 'BRL'}).format(value);
  }

}
