import NoteContext from "./noteContext";
import { useState } from "react";

const NoteState = (props) => {
  const host = "http://localhost:5000";

  const initialNotes = [];

  const [notes, setNotes] = useState(initialNotes);

  // Fetch all notes
  const getNote = async () => {
    // API call
    const url = `${host}/notes/getnotes`;
    let response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("notesToken"),
      },
    });
    const fetchedNotes = await response.json();
    console.log(fetchedNotes);
    setNotes(fetchedNotes);
  };

  // Add note
  const addNote = async (title, description, tag) => {
    // API call
    const url = `${host}/notes/addnote`;
    let response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("notesToken"),
      },
      body: JSON.stringify({ title, description, tag }),
    });
    const data = response.json();
    const newNote = {
      _id: data._id,
      user: data.user,
      title: title,
      description: description,
      tag: tag,
      date: data.date,
      __v: 0,
    };
    setNotes(notes.concat(newNote));
  };

  // Edit note
  const editNote = async (id, title, description, tag) => {
    // API call
    const url = `${host}/notes/updatenote/${id}`;
    let response = await fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("notesToken"),
      },
      body: JSON.stringify({ id, title, description, tag }),
    });
    const data = response.json();
    console.log(data);

    let newNotes = JSON.parse(JSON.stringify(notes));
    for (let i = 0; i < newNotes.length; i++) {
      if (newNotes[i]._id === id) {
        newNotes[i].title = title;
        newNotes[i].description = description;
        newNotes[i].tag = tag;
        break;
      }
    }
    setNotes(newNotes);
  };

  // Delete note
  const deleteNote = async (id) => {
    const url = `${host}/notes/deletenote/${id}`;
    let response = await fetch(url, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("notesToken"),
      },
    });

    // front-end clean-up.
    const filteredNotes = notes.filter((note) => {
      return note._id !== id;
    });
    setNotes(filteredNotes);
  };

  return (
    <NoteContext.Provider
      value={{ notes, setNotes, addNote, deleteNote, getNote, editNote }}
    >
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
