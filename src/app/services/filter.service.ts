import { Injectable } from '@angular/core';
import { Comment } from '../models/comment.model';

@Injectable({
  providedIn: 'root'
})
export class FilterService {

  constructor() { }

  transform(value: Comment[], filterStr: string, propName: string): any[] {
    if(value.length === 0 || filterStr === '') return value;
    return [...value].filter((item, i)=>{
       if(typeof item[propName] === 'number') item[propName] += '';
      return item[propName].toLowerCase().indexOf(filterStr.toLowerCase()) !== -1;
    });
  }
}
