import { Component, OnInit } from '@angular/core';
import {NoteService} from "../services/note.service";

@Component({
  selector: 'app-note-list',
  templateUrl: './note-list.component.html',
  styleUrls: ['./note-list.component.scss']
})
export class NoteListComponent implements OnInit {
  notes$: any

  constructor(private ns: NoteService) { }

  ngOnInit(): void {
    // this.ns.getNotes().subscribe(notes => this.notes$ = notes)
    this.ns.getNotes()
    this.ns.notes$.subscribe(notes => this.notes$ = notes)
    console.log('console debug' , this.notes$)
  }
}
