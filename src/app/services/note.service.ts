import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {Note} from "../models/note/note";
import {Observable, throwError, BehaviorSubject, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NoteService {
  url: string = 'http://localhost:4000/api';
  headers = new HttpHeaders().set('Content-Type', 'application/json');
  constructor(private http: HttpClient) { }

  createNote (note: Note): Observable<any> {
    return this.http.post(`${this.url}/create`, {data: note})
  }

  getNotes (): Observable<any> {
    return this.http.get(`${this.url}/get`)
  }

  deleteNote (id: number): Observable<any> {
    return this.http.delete(`${this.url}/delete/${id}`)
  }
}
