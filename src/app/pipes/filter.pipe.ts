import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'appFilter' })
export class FilterPipe implements PipeTransform {

  transform(items: any[], searchText: string): any[] {
    console.log(items);
    if (!items) {
      return [];
    }
    if (!searchText) {
      return [];
    }
    searchText = searchText.toLowerCase();
    let result = [];

    items.forEach(item => { 
      const values = Object.values(item)
      console.log(values);
      console.log(searchText);
      values.forEach(value => { 
        if (typeof value == "string") {
          let newValue = value.toLowerCase()
          console.log(newValue);
          console.log(item);
          console.log(searchText);
          if (newValue.includes(searchText) && !result.includes(item)) result.push(item);
        } else if (Array.isArray(value)) {
          value.forEach (v => {
            if (typeof v == "string") 
            if (v.toLowerCase().includes(searchText) && !result.includes(item)) result.push(item);
          });
        };
      });  
    });

    return result;
  }
};