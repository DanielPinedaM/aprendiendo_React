/* eslint-disable react/no-unescaped-entities */

import './task.css';

export default function Task({ ready }) {
  const estilosEnLinea = {
    backgroundColor: 'blue',
    color: '#fff',
    fontSize: '20px',
  };

  const objetoRojo = {
    backgroundColor: 'red',
  };
  const objetoVerde = {
    backgroundColor: 'green',
  };

  return (
    <>
      <h3>
        estilos en linea con etiqueta <code>style=""</code>
      </h3>
      <p style={{ backgroundColor: 'red' }}>SIN variable</p>
      <p style={estilosEnLinea}>CON variable</p>
      <p className="clase_css">archivo externo .css</p>
      <h3>Estilos condicionales</h3>
      <span style={ready ? objetoVerde : objetoRojo}>
        {ready ? 'tarea realizada' : 'tarea pendiente'}
      </span>
      <br /> <br />
      <span className={ready ? 'clase_verde' : 'clase_rojo'}>
        {ready ? 'tarea realizada' : 'tarea pendiente'}
      </span>
    </>
  );
}
