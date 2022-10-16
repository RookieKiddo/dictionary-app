import React, { useState } from "react";

const Notes = () => {
  const [noteText, setNoteText] = useState("");
  const [allNotes, setAllNotes] = useState([]);
  const handleChange = (e) => {
    e.preventDefault();
    setNoteText(e.target.value);
  };

  const handleSubmit = () => {
    setAllNotes([...allNotes, noteText]);
  };

  const deleteNoteHandler = (index) => {
    const notes = allNotes.filter((value, ind) => index !== ind);
    setAllNotes(notes);
  };
  return (
    <React.Fragment>
      <h4>Notes</h4>
      <input type="text" onChange={handleChange} />
      <button onClick={handleSubmit}>Add Note</button>

      {allNotes &&
        allNotes.map((note, index) => {
          return (
            <div key={index}>
              - {note}{" "}
              <button
                onClick={() => {
                  deleteNoteHandler(index);
                }}
              >
                Remove
              </button>{" "}
            </div>
          );
        })}
    </React.Fragment>
  );
};

export default Notes;
