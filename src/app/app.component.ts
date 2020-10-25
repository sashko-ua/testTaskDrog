import { Component } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop'; //для перетягування
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})

export class AppComponent {

  constructor() {
  }

  urls: any = [];

  // status: boolean = false;

  selectImgs(e): void { //Прев'юшка для фото
    for (let i = 0; i < e.target.files.length; i++) {
      const reader = new FileReader();
      reader.readAsDataURL(e.target.files[i]);

      reader.onload = (e: any) => {
        this.urls.push(reader.result);
      }
    }
  }

  highlight(e): void { //Добавлення виділення
    if (e.target.tagName === 'IMG') {

      e.target.classList.toggle('hightlight');

    }

    // this.status = !this.status
  }

  drop(e: CdkDragDrop<any[]>): void { //зміна ідексу в масиві
    moveItemInArray(this.urls, e.previousIndex, e.currentIndex);
  }

  ngOnInit(): void {
  }
}