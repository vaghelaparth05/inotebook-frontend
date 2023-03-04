import React, { useContext, useState } from "react";
import NoteContext from "../Contexts/Notes/noteContext";

export default function Addnote() {
    const [note,setNote]=useState({title: "", description: "", tags: ""});
  const notesContext = useContext(NoteContext);
  const addNote = notesContext.addNote;

  const handleClick = (event) => {
    event.preventDefault();
    addNote(note.title, note.description, note.tags);
    setNote({title: "", description: "", tags: ""});
  };

  const onChange = (event) => {
    event.preventDefault();
    setNote({...note, [event.target.name]: event.target.value});
  };
  return (
    <>
      <h2>Create a note : </h2>
      <form>
        <div className="form-group my-3">
          <label className="fw-bold mb-2" htmlFor="title">Title</label>
          <input
            type="text"
            className="form-control"
            id="title"
            name="title"
            aria-describedby="emailHelp"
            onChange={onChange}
          />
        </div>
        <div className="form-group my-3">
          <label className="fw-bold mb-2" htmlFor="description">Description</label>
          <input
            type="text"
            className="form-control"
            id="description"
            name="description"
            onChange={onChange}
          />
        </div>
        <div className="form-group my-3">
          <label className="fw-bold mb-2" htmlFor="tags">Tag</label>
          <input
            type="text"
            className="form-control"
            id="tags"
            name="tags"
            onChange={onChange}
          />
        </div>
        <button
          type="submit"
          className="btn btn-primary my-2"
          onClick={handleClick}
        >
          Submit
        </button>
      </form>
    </>
  );
}
