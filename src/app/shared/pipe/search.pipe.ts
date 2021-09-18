import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {
  // search anywhere in string
  transform(array: any, inputValue: string) {
    return array && inputValue ? array.filter((elem: any) => elem.full_name.toString().toLowerCase().includes(inputValue.toString().toLowerCase())) : array
  }

}
