import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Note } from '../shared/interfaces/note.interfaces';

@Component({
  selector: 'app-mynote',
  templateUrl: './mynote.component.html',
  styleUrls: ['./mynote.component.css']
})
export class MynoteComponent {

  @Input() mynote: Note;
  @Output() deleteNote = new EventEmitter<number>();
  @Output() editNote = new EventEmitter<number>();

  constructor() { }

  onDeleteNote(id: number) {
    this.deleteNote.emit(id);
  } 

  onEditMyNote(id: number) {
    this.editNote.emit(id);
  }

}
