import React from "react";

function Noteitem(props) {
  const note = props.note;
  console.log(note);
  return (
    <>
    <div className="my-3 col-md-3">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{note.title}</h5>
          <p className="card-text">{note.description}</p>
        </div>
      </div>
    </div>
    </>
  );
}

Noteitem.propTypes = {};

export default Noteitem;
