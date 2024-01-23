import PropTypes from "prop-types";
import { useState } from "react";

export const EsconderOcultar = () => {
    const [show, setShow] = useState(true);
    const esconderOcultar = (evento) => {
      if (show === true) {
        evento.target.innerHTML = "Mostrar el texto";
        setShow(false);
      } else if (show === false) {
        evento.target.innerHTML = "Ocultar el texto";
        setShow(true);
      }
    };
  
    return (
      <>
        <button onClick={esconderOcultar}>Ocultar el texto</button>
        <div style={{ visibility: show ? "visible" : "hidden" }}>
          Mostrar/Ocultar elementos
        </div>
      </>
    );
  };
  