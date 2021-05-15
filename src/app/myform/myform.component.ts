import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Note } from '../shared/interfaces/note.interfaces';
import { HttpMynotesService } from '../shared/services/http-mynotes.service';

@Component({
  selector: 'app-myform',
  templateUrl: './myform.component.html',
  styleUrls: ['./myform.component.css']
})
export class MyformComponent {

  constructor(private HttpMynotesService: HttpMynotesService) { }

    noteNumber = 1;
    notes: Note[];

    formnote: Note = {id: 0, name: '', text: '', date: new Date()};

    @Output() addNewNote = new EventEmitter<Note>();
    @Input() editNoteInForm: Note;
    @Input() edit: boolean;

  ngDoCheck(): void {
    if (this.edit == true) {
      this.formnote.id = this.editNoteInForm.id;
      this.formnote.name = this.editNoteInForm.name;
      this.formnote.text = this.editNoteInForm.text;
      this.edit = false;
    }
    
  }

 async addNote() {
    this.notes = await this.HttpMynotesService.getNotes();
    if (this.notes.length != 0) {
    this.noteNumber = this.notes[this.notes.length-1].id + 1;
    } else {
      this.noteNumber = 1;
    }
    let note: Note;
    if (this.notes.findIndex(elm => elm.id == this.formnote.id) != -1) {
      note = {
        id: this.formnote.id,
        name: this.formnote.name,
        text: this.formnote.text,
        date: new Date()
      };
      this.formnote.id = 0;
    }
    else {
      note = {
        id: this.noteNumber,
        name: this.formnote.name,
        text: this.formnote.text,
        date: new Date()
      };
      this.noteNumber++;
    }
    this.addNewNote.emit(note);
    this.formnote.name = null;
    this.formnote.text = null;

  }

}
