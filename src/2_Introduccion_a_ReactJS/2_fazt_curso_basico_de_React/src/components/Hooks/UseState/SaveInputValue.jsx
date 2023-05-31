/* eslint-disable react/jsx-no-target-blank */

import { useState } from 'react'

const SaveInputValue = () => {
  /* Cuando no escribo nada 
     dentro del par de parentesis de useState()
     entonces su valor es undefined */
  const [mensaje, setMensaje] = useState('')

  const HandleInputText = (e) => {
    setMensaje(e.target.value)
    //console.log(mensaje)
  }

  const MostrarMensaje = () => console.log('mensaje es', mensaje)

  return (
    <>
      <h1>
        <a href='https://www.youtube.com/watch?v=rLoWMU4L_qE&t=9532s' target='_blank'>
          <code>useState()</code> - Guardar valor de input
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
    </>
  )
}

export default SaveInputValue
