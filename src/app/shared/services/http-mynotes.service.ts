import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Note } from '../interfaces/note.interfaces';

@Injectable({
  providedIn: 'root'
})
export class HttpMynotesService {
  routeApi = 'http://localhost:3000/notes';
  constructor(private http: HttpClient) { }

  getNotes(): Promise<any> {
    return this.http.get(this.routeApi).toPromise();
  }

  postNote(data: Note) {
    return this.http.post(this.routeApi, data).toPromise();
  }

  deleteNote(id: number) {
    return this.http.delete(this.routeApi+'/'+id).toPromise();
  }

  patchNote(note: Note) {
    return this.http.patch(this.routeApi+'/'+note.id, note).toPromise();
  }
}
