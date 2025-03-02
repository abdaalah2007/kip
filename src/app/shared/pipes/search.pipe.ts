import { Pipe, PipeTransform } from '@angular/core';
import { Prodouct } from '../interfaces/prodouct';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(arrayOfObjects:Prodouct[] , term:string): Prodouct[] {
    return arrayOfObjects.filter( (item)=> item.title.toLowerCase().includes(term.toLowerCase())) ;
  }

}
