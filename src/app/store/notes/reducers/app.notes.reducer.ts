import { Note } from "src/app/models/note/note";

export const initialState: Note = {
    _id: 0,
    name: '',
    content: '',
    type: '',
}

export function notesReducers (
    state: Note = initialState, 
    action: any
    ) {
    // console.log('in reducer', action)
    switch (action.type) {
        case 'LOAD_NOTES':
            console.log('ici', action.payload)
        return {
            ...state,
            notes: action.payload
        }
        default:
            return state
    }

}
