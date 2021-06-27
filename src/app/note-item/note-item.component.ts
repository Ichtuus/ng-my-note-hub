import { Component, Input, OnInit } from '@angular/core';
import {Note} from "../models/note/note";
import {NoteService} from "../services/note.service";

@Component({
  selector: 'app-note-item',
  templateUrl: './note-item.component.html',
  styleUrls: ['./note-item.component.scss']
})
export class NoteItemComponent implements OnInit {
  @Input() note!: Note

  constructor(private ns: NoteService) { }

  ngOnInit(): void {
  }

  removeNote(id: number|null) {
    console.log('id', id)
    if (id) {
      const note = this.ns.deleteNote(id)
      console.log('test delete', note)
    }
  }

}
