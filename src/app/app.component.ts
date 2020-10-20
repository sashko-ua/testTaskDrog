import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})

export class AppComponent {

  constructor() {
  }

  ngOnInit(): void {
  }

  urls = [];

  selectImgs(e) {
    if (e.target.files) {
      for (let i = 0; i < File.length; i++) {
        const reader = new FileReader();
        reader.readAsDataURL(e.target.files[i]);
        reader.onload = (e: any) => {
          this.urls.push(reader.result);
        }
      }
    }
  }
}