import { Event } from 'rxjs';
import { Component } from '@angular/core';
import { CdkDragDrop } from '@angular/cdk/drag-drop';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})

export class AppComponent {

  constructor() {
  }

  urls: any = [];

  status: boolean = false;

  selectImgs(e): void {
    for (let i = 0; i < e.target.files.length; i++) {
      const reader = new FileReader();
      reader.readAsDataURL(e.target.files[i]);

      reader.onload = (e: any) => {
        this.urls.push(reader.result);
      }
    }
  }

  hightlight(): void {
    this.status = !this.status;
  }

  drop(Event: CdkDragDrop<string[]>) {

  }

  ngOnInit(): void {
  }
}