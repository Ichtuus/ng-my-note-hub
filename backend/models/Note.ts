import mongoose from 'mongoose';
import {NoteRepository} from "../repository/note/NoteRepository";

const Schema = mongoose.Schema;

export interface INoteModel extends mongoose.Document {
  name: string;
  content: string;
  type: string;
}

// Define collection and schema
 let NoteSch = new Schema({
  name: {
    type: String
  },
  content: {
    type: String
  },
  type: {
    type: String
  }
}, {
  collection: 'notes'
})

export let NoteSchema = mongoose.model<INoteModel>('Note', NoteSch)

export class NoteModel {
  private _noteModel: INoteModel | undefined

  get name (): string {
    return this._noteModel!.name
  }

  get content (): string {
    return this._noteModel!.content
  }

  get type (): string {
    return this._noteModel!.type
  }

  static createNote(data: any) {
    return new Promise((resolve, reject) => {
      let repo = new NoteRepository();
      repo.create(data, (err: any, res: { json: (arg0: { newObject: any; message: string; date_add: Date; }) => void; }) => {
        if (err) {
          reject(err)
        } else {
          resolve(data)
        }
      })
    })

  }

  static findNotes () {
    return new Promise((resolve, reject) => {
      let repo = new NoteRepository();
      repo.find((error: any, data: any) => {
        if (error) {
          reject(error)
        } else {
          resolve(data)
        }
      })
    })
  }

  static deleteNote (id: string) {
    return new Promise((resolve, reject) => {
      let repo = new NoteRepository();
      repo.delete(id, (error: any, data: any) => {
        if (error) {
          reject(error)
        } else {
          // Get fresh list of notes
          const notes = this.findNotes()
          resolve(notes)
        }
      })
    })
  }
}

