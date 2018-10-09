import { Pipe, PipeTransform } from '@angular/core';
import { Comment } from '../../models/comment.model';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: Comment[], filterStr: string, propName: string): any[] {
    if(value.length === 0 || filterStr === '') return value;
    
    return value.filter((item, i)=>{
       if(typeof item[propName] === 'number') item[propName] += '';
      return item[propName].toLowerCase().indexOf(filterStr) !== -1;
    });
  }

}
