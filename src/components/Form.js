import React, { useState } from "react";
import { useForm } from "react-hook-form";
import ModalSantinho from "./ModalSantinho";

export default function Form() {
  const { register, handleSubmit } = useForm();
  const [image, setImage] = useState({ preview: "", raw: "" });
  const [carregaModal, setCarregaModal] = useState(false);
  const [dadosForm, setDadosForm] = useState([]);

  const onSubmit = async (data, e) => {
    e.target.reset();
    setImage({ preview: "", raw: "" });
    handleModal(data);
  };

  const handleChange = (e) => {
    if (e.target.files.length) {
      setImage({
        preview: URL.createObjectURL(e.target.files[0]),
        raw: e.target.files[0],
      });
    }
  };

  const handleModal = (data) => {
    const dados = [
      {
        img: image.preview,
        name: data.name,
        numero: data.numero,
      },
    ];
    setDadosForm(dados);
    return setCarregaModal(true);
  };

  const handleClick = () => {
    setCarregaModal(true);
  };

  const onCloseModal = () => {
    return setCarregaModal(false);
  };

  return (
    <>
      {carregaModal ? (
        <ModalSantinho fechaModal={onCloseModal} data={dadosForm} />
      ) : null}
      <form id="submitForm" onSubmit={handleSubmit(onSubmit)}>
        <div style={{ display: "flex", flexFlow: "wrap" }}>
          <div className="form-group" style={{ margin: 15 }}>
            <label htmlFor="avatar">Foto*</label>
            <br />
            {image.preview ? (
              <>
                <img src={image.preview} alt="dummy" width="80%" />
              </>
            ) : null}
            <br />

            <div className="file-field input-field">
              <div className="btn">
                <span>Procurar Foto</span>

                <input
                  type="file"
                  name="avatar"
                  id="avatar"
                  accept="image/*"
                  required
                  onChange={handleChange}
                  ref={register({ required: true })}
                />
              </div>
              <div className="file-path-wrapper">
                <input
                  className="file-path validate"
                  type="text"
                  placeholder="Arquivo"
                />
              </div>
            </div>
          </div>
          <div className="form-group" style={{ flex: 1, margin: 15 }}>
            <label htmlFor="name">Nome*</label>
            <input
              className="form-control"
              type="text"
              name="name"
              id="name"
              required
              ref={register({ required: true })}
            />
            <label htmlFor="numero">Número*</label>
            <input
              className="form-control"
              type="text"
              name="numero"
              maxLength="5"
              id="numero"
              required
              ref={register({ required: true })}
            />
          </div>
        </div>
        <div
          className="text-left mb-3"
          style={{ display: "flex", placeContent: "flex-end" }}
        >
          <button
            type="submit"
            id="form-btn"
            onClick={() => handleClick()}
            className="btn btn-danger active activeborder-0"
            data-disable-with="Enviar"
          >
            Enviar
          </button>
        </div>
      </form>
    </>
  );
}
