import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { NoteService } from 'src/app/services/note.service';
import { switchMap, map, catchError } from 'rxjs/operators';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import { EMPTY } from 'rxjs';
@Injectable()
export class NotesEffect {
    url: string = 'http://localhost:4000/api';
    constructor(
        private actions$: Actions,
        private http: HttpClient
      ) {}
    
    getEventStart$ = createEffect(() => 
        this.actions$.pipe(
            ofType('LOAD_NOTES'),
            switchMap(() => {
                return this.http.get<any>(`${this.url}/get`)
                .pipe(
                    map(responseBody => ({ 
                        type: 'LOAD_NOTES',
                        payload: responseBody
                    })),
                )

            })
         )
    )
}