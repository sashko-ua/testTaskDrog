import { PhotoService } from './photo.service';
import { Photo } from './photo.interface';
import { Component, OnInit } from '@angular/core';

import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop'; //для перетягування

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.sass']
})
export class PhotoComponent implements OnInit {


  photoSubmitted = false;

  // photos: Photo[] = [];

  constructor(private photoService: PhotoService) { }

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
    this.photoService.getPhotos().subscribe(photos => this.urls = photos);

  }

  addNewPhoto() {
    this.photoSubmitted = true;

    this.urls.push();
  }
}
