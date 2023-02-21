import React, {useState, useContext} from "react";
import NoteContext from "../Contexts/Notes/noteContext";

function Home() {
  const notesContext = useContext(NoteContext);

  const notes = notesContext.notes;
  console.log(notes);

  return (
    <>
      <h2>Create a note : </h2>
      <form>
        <div className="form-group my-3">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
          />
          <small id="emailHelp" className="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
          />
        </div>
        <div className="form-check">
          <input type="checkbox" className="form-check-input" id="exampleCheck1" />
          <label className="form-check-label" htmlFor="exampleCheck1">
            Check me out
          </label>
        </div>
        <button type="submit" className="btn btn-primary my-2">
          Submit
        </button>
      </form>

      <h2>Your Notes : </h2>
      {notes.map((note) => {
        return note.title;
      })}
    </>
  );
}

export default Home;
