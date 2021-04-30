import React, { useContext, useRef } from "react";
import { AlertContext } from "../context/alert/alertContext";
import { TransitionGroup, CSSTransition } from "react-transition-group";

const Notes = ({ notes, onRemove }) => {
  const alert = useContext(AlertContext);

  return (
    <TransitionGroup component="ul" className="list-group">
      {notes.map((note) => (
        <CSSTransition key={note.id} classNames={"note"} timeout={550}>
          <li className="list-group-item note">
            <div>
              <strong>{note.title}</strong>
              <span>{note.date}</span>
            </div>
            <button
              type="button"
              className="btn btn-outline-danger btn-sm"
              onClick={() => {
                onRemove(note.id);
                alert.show("Note is deleted", "danger");
              }}
            >
              &times;
            </button>
          </li>
        </CSSTransition>
      ))}
    </TransitionGroup>
  );
};

export default Notes;
