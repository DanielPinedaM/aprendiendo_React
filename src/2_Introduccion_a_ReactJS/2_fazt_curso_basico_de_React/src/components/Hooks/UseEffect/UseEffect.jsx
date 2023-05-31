/* eslint-disable react/jsx-no-target-blank */

import { useState, useEffect } from 'react'

const UseEffect = () => {   // este es el componente padre
  const [mensaje, setMensaje] = useState('')
  const [counter, setCounter] = useState(0)

  useEffect(() => {
    console.log('render SIN [] dependencias')
  })

  useEffect(() => {
    console.log('dependencias vacias []')
  }, []) /* [] son las dependencias */

  useEffect(() => {
    console.log('CON dependencia [counter]')
  }, [counter]) /* Ejecutar (renderizar) cuando cambie estado del counter */

  const HandleInputText = (e) => {
    setMensaje(e.target.value)
    //console.log(mensaje)
  }

  const MostrarMensaje = () => console.log('mensaje es', mensaje)

  return (
    <>
      <h1>
        <a href='https://www.youtube.com/watch?v=rLoWMU4L_qE&t=10519s' target='_blank'>
          Cuando se ejecuta <code>UseEffect()</code> ?
        </a>
      </h1>

      <form>
        <input type='text' placeholder='onChange' onChange={HandleInputText} />
        <button type='button' onClick={MostrarMensaje}>
          Guardar
        </button>
        <p>
          Valor del input: <b>{mensaje}</b>
        </p>
      </form>

      <br />
      <button type='button' onClick={() => setCounter(counter + 1)}>
        Sumar
      </button>
      <p>
        Contador: <b>{counter}</b>
      </p>
    </>
  )
}

export default UseEffect
