import { Photo } from './photo.interface';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  constructor(private http: HttpClient) { }

  public getPhotos(): Observable<Photo[]> {
    return this.http.get<Photo[]>('/api/photo');
  }

  public postPhoto(photo: Photo): Observable<Photo> {
    return this.http.post<Photo>('/api/photo', photo);
  }
}
