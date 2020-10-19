import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {

  constructor() { }

  ngOnInit(): void {
  }

  urls = [];

  selectImgs(event) {
    if (event.target.files) {
      console.log(event.target.files);

      for (let i = 0; i < File.length; i++) {
        const reader = new FileReader();
        reader.readAsDataURL(event.target.files[i]);
        reader.onload = (events: any) => {
          this.urls.push(events.target.rasult);
        }
      }
    }
  }
}
