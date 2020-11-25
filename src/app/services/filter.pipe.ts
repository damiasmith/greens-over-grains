import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'appFilter' })
export class FilterPipe implements PipeTransform {
  /**
   * Transform
   *
   * @param {any[]} items
   * @param {string} searchText
   * @returns {any[]}
   */
  transform(items: any[], searchText: string): any[] {
    console.log(items);
    if (!items) {
      return [];
    }
    if (!searchText) {
      return null;
    }
    searchText = searchText.toLowerCase();
    let result = [];
    items.filter(item => { 
      const values = Object.values(item)
      console.log(values);
      console.log(searchText);
      values.map(value => { 
        if (typeof value == "string") {
          let newValue = value.toLowerCase()
          console.log(newValue);
          console.log(item);
          console.log(searchText);
          if (newValue.includes(searchText)) {
            result.push(item);
            return
          }
        };
      });  

    });
    return result;
  }
};