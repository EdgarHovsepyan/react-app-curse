import React, { useState, useContext } from "react";
import { AlertContext } from "../context/alert/alertContext";
import { FirebaseContext } from "../context/firebase/firebaseContext";

const Form = () => {
  const [value, setValue] = useState("");
  const alert = useContext(AlertContext);
  const firebase = useContext(FirebaseContext);

  const submitHandler = (e) => {
    e.preventDefault();

    if (value.trim()) {
      firebase
        .addNote(value.trim())
        .then(() => {
          alert.show("Note is created", "success");
        })
        .catch(() => {
          alert.show("something has gone wrong", "danger");
        });
      setValue("");
    } else {
      alert.show("Write name of note");
    }
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="form-group">
        <input
          type="text"
          className="form-control"
          placeholder="Create new note"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </div>
    </form>
  );
};

export default Form;
