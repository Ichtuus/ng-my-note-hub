import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NoteAddComponent } from './note-add/note-add.component';
import { NoteListComponent } from './note-list/note-list.component';
import { NoteItemComponent } from './note-item/note-item.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from "@angular/forms";

import { NoteService } from "./services/note.service";

import { StoreModule } from "@ngrx/store";
import { EffectsModule } from '@ngrx/effects';
import { NotesEffect } from './store/notes/effects/app.notes.effect';
import { notesReducers } from './store/notes/reducers/app.notes.reducer';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NoteAddComponent,
    NoteListComponent,
    NoteItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
    StoreModule.forRoot([notesReducers]),
    EffectsModule.forRoot([NotesEffect])
    
  ],
  providers: [NoteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
