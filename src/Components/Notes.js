import React, { useContext, useEffect, useRef, useState } from "react";
import NoteContext from "../Contexts/Notes/noteContext";
import Noteitem from "./Noteitem";

function Notes(props) {
  const notesContext = useContext(NoteContext);
  const addNote = notesContext.addNote;
  const getNote = notesContext.getNote;
  const notes = notesContext.notes;
  const editNote = notesContext.editNote;
  const [note,setNote]=useState({id: "",etitle: "", edescription: "", etags: ""});

  useEffect(() => {
    getNote();
  }, []);

  const ref = useRef(null);
  const closeRef = useRef(null);

  const updateNote = (currentNote) => {
    ref.current.click();
    setNote({id: currentNote._id, etitle: currentNote.title, edescription: currentNote.description, etags: currentNote.tags ? currentNote.tags : ""});
  };

  const handleClick = (event) => {
    event.preventDefault();
    closeRef.current.click();
    editNote(note.id, note.etitle, note.edescription, note.etags);
  };

  const onChange = (event) => {
    event.preventDefault();
    setNote({...note, [event.target.name]: event.target.value});
  };

  return (
    <>
      <h2>Your Notes : </h2>

      {/* Modal */}
      <button
        type="button"
        className="btn btn-primary d-none"
        data-bs-toggle="modal"
        data-bs-target="#staticBackdrop"
        ref={ref}
      ></button>
      <div
        className="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h3 className="modal-title" id="staticBackdropLabel">
                Edit Note
              </h3>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form>
                <div className="form-group mb-3">
                  <label htmlFor="etitle mb-2">Title</label>
                  {note.etitle.length<5 && <p className="text-danger">Title should be atleast 5 characters long...</p>}
                  <input
                    type="text"
                    className="form-control"
                    id="etitle"
                    name="etitle"
                    value={note.etitle}
                    aria-describedby="emailHelp"
                    onChange={onChange}
                  />
                </div>
                <div className="form-group mb-3">
                  <label htmlFor="edescription mb-2">Description</label>
                  <input
                    type="text"
                    className="form-control"
                    id="edescription"
                    name="edescription"
                    value={note.edescription}
                    onChange={onChange}
                  />
                </div>
                <div className="form-group mb-3">
                  <label htmlFor="etags mb-2">Tag</label>
                  <input
                    type="text"
                    className="form-control"
                    id="etags"
                    name="etags"
                    value={note.etags}
                    onChange={onChange}
                  />
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button
              ref={closeRef}
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button disabled={note.etitle.length<5} type="button" className="btn btn-primary" onClick={handleClick}>
                Edit Changes.
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* /Modal */}

      {notes.length === 0 && <div>
        Add notes to display...
        </div>} 

      <div className="row my-3">
        {notes.map((note) => {
          return (
            <Noteitem
              key={note._id}
              note={note}
              addNote={addNote}
              updateNote={updateNote}
            />
          );
        })}
      </div>
    </>
  );
}

Notes.propTypes = {};

export default Notes;
