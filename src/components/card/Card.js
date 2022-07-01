import React, { useState } from 'react';
import './style.css';

const SectionCard = (props) => {
  const randomNumber = Math.floor(Math.random() * (500 - 300 + 1) + 300);
  const isCat = props.text == 'Gerar Gatinho';
  const urlCat = `https://placekitten.com/${randomNumber}/${randomNumber}`;
  const urlDog = `https://place.dog/${randomNumber}/${randomNumber}`;

  const [url, setUrl] = useState(
    isCat ? `https://placekitten.com/300/300` : `https://place.dog/300/300`,
  );

  return (
    <div className="container-card">
      <button
        onClick={() => (isCat ? setUrl(urlCat) : setUrl(urlDog))}
        className="card-button"
      >
        {props.text}
      </button>
      <img src={url} className="card-img" alt="Imagem de um pet" />
    </div>
  );
};

function Button() {
  return (
    <section className="container">
      <SectionCard text="Gerar Gatinho" />
      <SectionCard text="Gerar Cachorrinho" />
    </section>
  );
}

export default Button;
