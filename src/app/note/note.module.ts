import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NoteRoutingModule } from './note-routing.module';
import { NoteListComponent } from './note-list/note-list.component';
import { NoteItemComponent } from './note-item/note-item.component';


@NgModule({
  declarations: [
    NoteListComponent,
    NoteItemComponent
  ],
  imports: [
    CommonModule,
    NoteRoutingModule
  ]
})
export class NoteModule { }
