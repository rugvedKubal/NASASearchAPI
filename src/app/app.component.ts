import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SearchModel } from './search.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {

  constructor(private http: HttpClient) {}

  titles: string[] = [];
  images: string[] = [];

  onSearch() {
    // this.http.get<SearchModel>('https://images-api.nasa.gov/search?q=nebula&media_type=image&page=1')
    // .subscribe(response => {
    //     console.log(response);
    // });

    this.http.get<SearchModel>('https://images-api.nasa.gov/search?q=nebula&media_type=image&page=1')
    .subscribe(response => {
      for(let i=0; i<response.collection.items.length; i++) {
        for(let j=0; j<response.collection.items[i].links.length; j++) {
          this.images.push(response.collection.items[i].links[j].href);
        }
      }

      for(let i=0; i<response.collection.items.length; i++) {
        for(let j=0; j<response.collection.items[i].data.length; j++) {
          this.titles.push(response.collection.items[i].data[j].title);
        }
      }

      //console.log(this.titles.length+" "+this.images.length);

      // for(let i=0; i<this.images.length; i++) {
      //   console.log(this.images[i]);
      // }

      // for(let i=0; i<this.title.length; i++) {
      //   console.log(this.title[i]);
      // }

    });    

  }


}
