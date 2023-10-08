import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'seemore'
})
export class SeemorePipe implements PipeTransform {

  transform(desc: string, limit:number , flage:boolean): string {
    return desc.split('').slice(0,limit).join('');
  }

}
