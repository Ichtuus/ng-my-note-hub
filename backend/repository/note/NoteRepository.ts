import {BaseRepository, IRead, IWrite} from "../BaseRepository";
import {INoteModel, NoteSchema} from "../../models/Note";

export class NoteRepository extends BaseRepository<INoteModel>  implements IRead<any>, IWrite<any> {
  constructor() {
    // @ts-ignore
    super(NoteSchema);
  }
}
Object.seal(NoteRepository);
