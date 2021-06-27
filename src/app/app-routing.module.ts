import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {NoteAddComponent} from "./note-add/note-add.component";
import {NoteListComponent} from "./note-list/note-list.component";

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'add-note', component: NoteAddComponent },
  { path: 'list-note', component: NoteListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
