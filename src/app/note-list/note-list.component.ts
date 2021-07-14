import { Component, OnInit } from '@angular/core';
import {NoteService} from "../services/note.service";
import { Store } from '@ngrx/store'

@Component({
  selector: 'app-note-list',
  templateUrl: './note-list.component.html',
  styleUrls: ['./note-list.component.scss']
})
export class NoteListComponent implements OnInit {
  notes$: any

  constructor(
    private ns: NoteService,
    private store: Store<any>
    ) { }

  ngOnInit(): void {
    // this.ns.getNotes()
    // this.ns.notes$.subscribe(notes => this.notes$ = notes)
  }

  loadbt () {
    console.log('init')
    const data = this.store.dispatch({type: 'LOAD_NOTES'})
    console.log('test', data)
  }
}
