import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'cep'
})
export class PipeTransformPipe implements PipeTransform {

  transform(value: string): string {
    let cepTransform = value.replace(/(\d{5})(\d{3})/, '$1-$2')
    return cepTransform
  }
}