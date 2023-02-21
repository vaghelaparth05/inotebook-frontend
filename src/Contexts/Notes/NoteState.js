import NoteContext from './noteContext';
import { useState } from 'react';

const NoteState = (props) => {
    const initialNotes = [
        {
            "_id": "63f45ca7c7bba6c89f959e8d",
            "user": "63f2025b4e92e75de9ef0f8d",
            "title": "New Note",
            "description": "This is a new note",
            "tag": "General",
            "date": "2023-02-21T05:54:47.499Z",
            "__v": 0
          },
          {
            "_id": "63f45cb4c7bba6c89f959e8f",
            "user": "63f2025b4e92e75de9ef0f8d",
            "title": "New Note 2",
            "description": "This is a new note 2",
            "tag": "General",
            "date": "2023-02-21T05:55:00.736Z",
            "__v": 0
          },
    ];

    const [notes,setNotes] = useState(initialNotes);

    // Add note
    const addNote = (title, description, tag)=>{
      // TODO : API Call
      const newNote = {
        "_id": "63f45cb4c7bba6589f959e8f",
        "user": "63f2025b4e92e75de9ef0f8d",
        "title": title,
        "description": description,
        "tag": tag,
        "date": "2023-02-21T05:55:00.736Z",
        "__v": 0
      };
      setNotes(notes.concat(newNote));
    }

    // Edit note

    // Delete note
    const deleteNote = (id)=>{
      // TODO : API Call
      const filteredNotes = notes.filter((note) =>{
        return note._id !== id
      })
      setNotes(filteredNotes);
    }

    return( <NoteContext.Provider value={{notes, setNotes, addNote, deleteNote}}>
        {props.children}
    </NoteContext.Provider>
    )
};

export default NoteState;