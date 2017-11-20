import { Injectable,Pipe, PipeTransform } from '@angular/core';

/**
 * Generated class for the SearchPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
  name: 'search',
  pure:true
})
@Injectable()
export class SearchCatPipe implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
   */
  transform(list: any[], searchTerm: string): any[] {
    if (searchTerm) {
       searchTerm = searchTerm.toUpperCase();
       return list.filter(item => {
         return item.merchantName.toUpperCase().indexOf(searchTerm) !== -1 
       });
     } else {
       return list;
     }
 }
}
