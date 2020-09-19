import React, { useState, useRef } from "react";
import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import baseSantinho from "../img/base_santinho.png";
import { exportComponentAsJPEG } from "react-component-export-image";
import "../index.css";

export default function ModalSantinho({ data, fechaModal }) {
  const [modalIsOpen, setIsOpen] = useState(true);
  const componentRef = useRef();
  function onCloseModal() {
    setIsOpen(false);
    fechaModal();
  }

  return (
    <div>
      <Modal
        open={modalIsOpen}
        onClose={onCloseModal}
        disableOverlay={false}
        center
        classNames={{
          modal: "customModal",
        }}
      >
        {data.map((item, i) => (
          <div
            className="santinho"
            ref={componentRef}
            style={{
              backgroundRepeat: "no-repeat",
              backgroundSize: "contain",
              backgroundImage: `  url(${item.img})`,
              display: "flex",
            }}
            key={i}
          >
            <p className="infoCard">{item.name}</p>
            <p className="infoCardNumero">VOTE {item.numero}</p>
            <img src={baseSantinho} alt={item.name} width="100%" />
          </div>
        ))}
        <div style={{ paddingTop: "10px", placeSelf: "flex-end" }}>
          <button
            type="button"
            className="btn  green darken-4 btn-success"
            style={{ marginRight: "10px" }}
            onClick={() => exportComponentAsJPEG(componentRef, "santinho.jpeg")}
          >
            Salvar
          </button>
          <button
            type="button"
            className="btn  btn-secondary"
            onClick={onCloseModal}
            style={{ marginRight: "10px" }}
          >
            Fechar
          </button>
        </div>
      </Modal>
    </div>
  );
}
