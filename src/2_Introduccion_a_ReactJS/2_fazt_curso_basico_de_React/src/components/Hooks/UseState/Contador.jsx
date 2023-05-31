/* eslint-disable react/jsx-no-target-blank */
import { useState } from 'react'

const Contador = () => {
  /* ESTADO:
     useState() funcion
     (0)        valor inicial de counter
     counter    variable
     setCounter valor de la variable, es de cualquier tipo (primitivo u objeto) */
  const [counter, setCounter] = useState(0) // const counter = 0

  const state = useState()
  console.log(state)
  // (2) [undefined, ƒ]

  const HandleSumar = () => setCounter(counter + 1)
  const HandleRestar = () => setCounter(counter - 1)
  const HandleReiniciar = () => setCounter(0)

  const Contenido = () => {
    return (
      <>
        <h1>
          <a href='https://www.youtube.com/watch?v=rLoWMU4L_qE&t=9532s' target='_blank'>
          <code>useState()</code> - Contador
          </a>
        </h1>
        <button type='button' onClick={HandleSumar}>
          Sumar
        </button>
        <button type='button' onClick={HandleRestar}>
          Restar
        </button>
        <button type='button' onClick={HandleReiniciar}>
          Reiniciar
        </button>
        <p>
          Contador: <b>{counter}</b>
        </p>
      </>
    )
  }

  return <Contenido />
}

export default Contador
