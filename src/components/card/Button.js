import React, { useState } from 'react';
import './style.css';

const TextButton = (props) => {
  const randomNumber = Math.floor(Math.random() * (1000 - 300 + 1) + 300);
  const eGatinho = props.text == 'Gerar Gatinho';
  const urlCat = `https://placekitten.com/${randomNumber}/${randomNumber}`;
  const urlDog = `https://place.dog/${randomNumber}/${randomNumber}`;

  const [url, setUrl] = useState(
    eGatinho ? `https://placekitten.com/300/300` : `https://place.dog/300/300`,
  );

  return (
    <div className="container-card">
      <button
        onClick={() => (eGatinho ? setUrl(urlCat) : setUrl(urlDog))}
        className="card-button"
      >
        {props.text}
      </button>
      <img src={url} className="card-img" />
    </div>
  );
};

function Button() {
  return (
    <section className="container">
      <TextButton text="Gerar Gatinho" />
      <TextButton text="Gerar Cachorrinho" />
    </section>
  );
}

export default Button;
