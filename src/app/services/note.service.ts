import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {Note} from "../models/note/note";
import {Observable, throwError, BehaviorSubject, Subject} from 'rxjs';
import {map, switchMap} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class NoteService {
  url: string = 'http://localhost:4000/api';
  headers = new HttpHeaders().set('Content-Type', 'application/json');
  public notes$: Observable<any>
  public _notes$ = new BehaviorSubject(null)

  constructor(private http: HttpClient) {
    this.notes$ = this._notes$.asObservable()
  }
  //
  // createNote (note: Note): Observable<any> {
  //   return this.http.post(`${this.url}/create`, {data: note})
  // }
  //
  // getNotes (): Observable<any> {
  //   return this.http.get(`${this.url}/get`)
  // }
  //
  // deleteNote (id: number): Observable<any> {
  //   return this.http.delete(`${this.url}/delete/${id}`)
  // }
  createNote (note: Note) {
    this.http.post<any>(`${this.url}/create`, {data: note}).subscribe(
      response => {
        this._notes$.next(response)
      }
    )
  }

  getNotes () {
    console.log('init')
    // this.notes.asObservable()
    this.http.get<any>(`${this.url}/get`).subscribe(
      response => {
        this._notes$.next(response)
      }
    )
  }

  deleteNote (id: number) {
    this.http.delete<any>(`${this.url}/delete/${id}`).subscribe(
      response => {
        this._notes$.next(response)
      }
    )
  }
}
