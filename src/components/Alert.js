import React, { useContext, useRef } from "react";
import { CSSTransition } from "react-transition-group";
import { AlertContext } from "../context/alert/alertContext";

const Alert = () => {
  const { alert, hide } = useContext(AlertContext);
  const nodeRef = useRef(null);
  return (
    <>
      <CSSTransition
        in={alert.visible}
        timeout={{
          enter: 450,
          exit: 350,
        }}
        classNames={"alert"}
        mountOnEnter
        unmountOnExit
        nodeRef={nodeRef}
      >
        <div
          ref={nodeRef}
          className={`alert alert-${alert.type || "warning"} alert-dismissible`}
        >
          <strong>Attention! - </strong>
          &nbsp;{alert.text}
          <button
            onClick={hide}
            type="button"
            className="close"
            aria-label="Close"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
      </CSSTransition>
    </>
  );
};

export default Alert;
