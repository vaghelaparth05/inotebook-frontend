import React, { useContext } from "react";
import NoteContext from "../Contexts/Notes/noteContext";
import Noteitem from "./Noteitem";

function Notes(props) {
  const notesContext = useContext(NoteContext);

  const notes = notesContext.notes;
  const addNote = NoteContext.addNote;
  return (
    <>
      <h2>Your Notes : </h2>
      <div className="row my-3">
      {notes.map((note) => {
        return <Noteitem key={note._id} note={note} addNote={addNote}/>;
      })}
      </div>
    </>
  );
}

Notes.propTypes = {};

export default Notes;
