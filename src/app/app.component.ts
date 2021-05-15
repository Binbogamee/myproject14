import { Component, OnInit } from '@angular/core';
import { Note } from './shared/interfaces/note.interfaces';
import { HttpMynotesService } from './shared/services/http-mynotes.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'project14';

  notes: Note[];

  constructor(private HttpMynotesService: HttpMynotesService) {}
  
ngOnInit() {
  this.getData();
}

  note: Note = {id: 0, name: '', text: '', date: new Date()};
  edit = false;

  async getData() {
    try {
      this.notes = await this.HttpMynotesService.getNotes();
    } catch (error) {
      console.log(error);
    }
  }

async AddNote(note: Note) {
  try {
    let newid = this.notes.findIndex(elm => elm.id == note.id);
    if (newid != -1) {
      await this.HttpMynotesService.patchNote(note);
    }
    else if (newid == -1) {
      await this.HttpMynotesService.postNote(note);
    }
    this.edit = false;
      } catch (error) {
        console.log(error);
      } finally {
        this.getData();
      }
}

  async onDeleteNote(id: number) {
    try {
      await this.HttpMynotesService.deleteNote(id);
    } catch (error) {
      console.log(error);
    } finally {
      this.getData();
    }
  }

  onEditNote(id: number) {
    let idx=this.notes.findIndex(elm => elm.id == id);
    this.note = this.notes[idx];
    this.edit = true;
  }
}
