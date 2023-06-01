import { useState } from 'react';

export const MostrarOcultarElementoHTML = () => {
  const [mostrar1, setMostrar1] = useState<Boolean>(true);

  const [esElementoVisible2, setEsElementoVisible2] = useState(true);

  const clickMostrar1 = () => setMostrar1(true);
  const clickOcultar1 = () => setMostrar1(false);

  const mostrarOcultar2 = () => setEsElementoVisible2(!esElementoVisible2);

  return (
    <>
      <button type="button" onClick={clickMostrar1}>
        btnMostrar 1
      </button>
      <button type="button" onClick={clickOcultar1}>
        btnOcultar 1
      </button>
      <p>mostrar1: {String(mostrar1)}</p>
      {mostrar1 && (
        <>
          <p>elemento 1</p>
        </>
      )}

      <hr />

      <button type="button" onClick={mostrarOcultar2}>
        btnMostrar y Ocultar 2
      </button>
      <p>esElementoVisible2: {String(esElementoVisible2)}</p>
      {esElementoVisible2 && (
        <>
          <p>elemento 2</p>
        </>
      )}
    </>
  );
};
