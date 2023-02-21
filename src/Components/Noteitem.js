import React, { useContext, useState } from "react";
import NoteContext from "../Contexts/Notes/noteContext";

function Noteitem(props) {
  const note = props.note;
  const notesContext = useContext(NoteContext);
  const removeNote = notesContext.deleteNote;
  
  const deleteNote = (id) => {
    removeNote(id);
  }
  return (
    <>
    <div className="my-3 col-md-4">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{note.title}</h5>
          <p className="card-text">{note.description}</p>

          <div className="d-flex">
          <i className="fa-regular fa-pen-to-square mr-3"></i>
          <i className="fa-regular fa-trash-can mr-3" onClick={() => {deleteNote(note._id)}}></i>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

Noteitem.propTypes = {};

export default Noteitem;
