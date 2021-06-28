import {Component, OnInit} from '@angular/core';
import {NoteService} from "../services/note.service";

@Component({
  selector: 'app-note-add',
  templateUrl: './note-add.component.html',
  styleUrls: ['./note-add.component.scss']
})
export class NoteAddComponent implements OnInit {

  d: any
  constructor(private ns: NoteService) { }

  ngOnInit(): void {
  }

  async addNote (formData: any) {
    await this.ns.createNote(formData.value)
    this.ns._notes$.subscribe(m => this.d = m)
    formData.reset()
  }
}
