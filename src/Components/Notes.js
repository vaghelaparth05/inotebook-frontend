import React, { useContext } from "react";
import NoteContext from "../Contexts/Notes/noteContext";
import Noteitem from "./Noteitem";

function Notes(props) {
  const notesContext = useContext(NoteContext);

  const notes = notesContext.notes;
  console.log(notes);
  return (
    <>
      <h2>Your Notes : </h2>
      <div className="row my-3">
      {notes.map((note) => {
        return <Noteitem note={note} />;
      })}
      </div>
    </>
  );
}

Notes.propTypes = {};

export default Notes;
