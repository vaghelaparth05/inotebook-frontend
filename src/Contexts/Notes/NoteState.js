import NoteContext from './noteContext';
import { useState } from 'react';

const NoteState = (props) => {
  const host = "http://localhost:5000";

    const initialNotes = [];

    const [notes,setNotes] = useState(initialNotes);

    // Fetch all notes
    const getNote = async ()=>{

      // API call
      const url = `${host}/notes/getnotes`;
      let response = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjNmMjAyNWI0ZTkyZTc1ZGU5ZWYwZjhkIn0sImlhdCI6MTY3NjgwNjc4NH0.rNhyuzueyoNl61x2X_f_2t3bZ1Au9rOg9-2m_CuSu3M"
        },
      });
      const fetchedNotes = await response.json();
      setNotes(fetchedNotes);
    }

    // Add note
    const addNote = async (title, description, tag)=>{

      // API call
      const url = `${host}/notes/addnote`;
      let response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjNmMjAyNWI0ZTkyZTc1ZGU5ZWYwZjhkIn0sImlhdCI6MTY3NjgwNjc4NH0.rNhyuzueyoNl61x2X_f_2t3bZ1Au9rOg9-2m_CuSu3M"
        },
        body: JSON.stringify({title, description, tag}),
      });
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
    const editNote = async (id, title, description, tag) => {
      // API call
      const url = `${host}/notes/updatenote/${id}`;
      let response = await fetch(url, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjNmMjAyNWI0ZTkyZTc1ZGU5ZWYwZjhkIn0sImlhdCI6MTY3NjgwNjc4NH0.rNhyuzueyoNl61x2X_f_2t3bZ1Au9rOg9-2m_CuSu3M"
        },
        body: JSON.stringify({title, description, tag}),
      });

      let newNotes= JSON.parse(JSON.stringify(notes));
      for(let i=0;i<newNotes.length;i++){
        if(newNotes[i]._id === id){
          newNotes[i].title = title;
          newNotes[i].description = description;
          newNotes[i].tag = tag;
          break;
        }
      }
      setNotes(newNotes);
    }

    // Delete note
    const deleteNote = async (id)=>{
      const url = `${host}/notes/deletenote/${id}`;
      let response = await fetch(url, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjNmMjAyNWI0ZTkyZTc1ZGU5ZWYwZjhkIn0sImlhdCI6MTY3NjgwNjc4NH0.rNhyuzueyoNl61x2X_f_2t3bZ1Au9rOg9-2m_CuSu3M"
        },
      });
      
      // front-end clean-up.
      const filteredNotes = notes.filter((note) =>{
        return note._id !== id
      })
      setNotes(filteredNotes);
    }

    return( <NoteContext.Provider value={{notes, setNotes, addNote, deleteNote, getNote, editNote}}>
        {props.children}
    </NoteContext.Provider>
    )
};

export default NoteState;