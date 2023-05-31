const EventHandlers = () => {
  const eventoClick = () => {
    alert('has dado click')
  }

  const dobleClick = () => {
    alert('has dado DOS click')
  }

  const handleChange = (e) => {
    console.log('objeto onChange', e)
    console.log('id del input', e.target.id)
    console.log('texto actual del input', e.target.value)
  }

  const enviarFormulario = (e) => {
    // eliminar comportamiento predeterminado del  elemento HTML, en este caso evita q <input type="submit"> recargue la pagina web
    e.preventDefault() // manejador de eventos
    alert('enviando formulario...')
  }

  return (
    <>
      {/* onClick se ejecuta cuando el usuario da click en el elemento HTML */}
      <button onClick={() => eventoClick()}>dar un solo click aqui</button>
      <br /> <br />
      {/* onDoubleClick se ejecuta cuando el usuario da DOBLE click en el elemento HTML  */}
      <button onDoubleClick={() => dobleClick()}>dar doble click aqui</button>
      <br /> <br />
      <input type='text' placeholder='onClick' onClick={() => eventoClick()} />
      <br /> <br />
      {/* onChange se ejecuta cuando el elemento cambia, en este input es cuando el usuario escribe */}
      <input id='id' type='text' placeholder='onChange' onChange={handleChange} />
      <br /> <br />
      {/* onSubmit se ejecuta cuando se envia el formilario */}
      <form action='' onSubmit={enviarFormulario}>
        <h1>Formulario</h1>
        <input type='submit' value='Enviar Form' />
      </form>
    </>
  )
}

export default EventHandlers
