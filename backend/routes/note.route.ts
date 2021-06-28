import express from 'express'
const noteRoute = express.Router();

// Note model
import {NoteModel} from '../models/Note';
import {APINoteOutput} from "../types/API-output/notes";

// Add Note
noteRoute.route('/create').post((req, res) => {
  NoteModel.createNote(req.body.data).then((data) => { return res.json(outputApiResponse(data, 'Ressource has been successfuly created'))

  })
});

// Get All Note
noteRoute.route('/get').get((req, res) => {
  NoteModel.findNotes().then((data) => {return res.json(data)})
})

// Get single Note
// noteRoute.route('/read/:id').get((req: { params: { id: any; }; }, res: { json: (arg0: any) => void; }) => {
//   Note.findById(req.params.id, (error: any, data: any) => {
//     if (error) {
//       return res.json(error)
//     } else {
//       res.json(data)
//     }
//   })
// })


// Update Note
// noteRoute.route('/update/:id').put((req: { params: { id: any; }; body: any; }, res: { json: (arg0: any) => void; }, next: (arg0: any) => any) => {
//   Note.findByIdAndUpdate(req.params.id, {
//     $set: req.body
//   }, (error: any, data: any) => {
//     if (error) {
//       console.log(error)
//       return next(error);
//     } else {
//       res.json(data)
//       console.log('Data updated successfully')
//     }
//   })
// })

// Delete Note
noteRoute.route('/delete/:id').delete((req , res, next) => {
  // Note.findOneAndRemove(req.params.id, (error: any, data: any) => {
  //   if (error) {
  //     return next(error);
  //   } else {
  //     res.status(200).json({
  //       msg: data
  //     })
  //   }
  // })
  NoteModel.deleteNote(req.params.id).then((data) => {
    return res.status(200).json(data)
  })
})

function outputApiResponse (obj: any, message: string): APINoteOutput {
  return {
    newObject: obj,
    message: message,
    date_add: new Date('now')
  }
}

module.exports = noteRoute;
