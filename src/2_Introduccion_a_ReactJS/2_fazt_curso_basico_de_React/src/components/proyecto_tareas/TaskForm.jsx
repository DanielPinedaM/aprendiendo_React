/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-no-target-blank */

import { useState, useContext  } from 'react'
import { TaskContext } from './../../context/TaskContext' 

export const TaskForm = (/* { createTask } */) => {
  // const title = ""
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')

  /* const valor = useContext(TaskContext)
  console.log("🚀 ~ file: TaskForm.jsx:13 ~ TaskForm ~ valor:", valor) */

  const { createTask } = useContext(TaskContext)
  console.log("🚀 ~ file: TaskForm.jsx:16 ~ TaskForm ~ createTask:", createTask)
  /* 
  <TaskContext.Provider
      value={{
        tasks,
        deleteTask,
        createTask,
      }}
    >
  */

  const GuardarTitulo = (e) => {
    setTitle(e.target.value)
    console.log('GuardarTitulo', title)
  }

  const GuardarDescripcion = (e) => {
    setDescription(e.target.value)
    console.log('GuardarDescripcion', description)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    createTask({
      title,
      description,
    })
    console.log('titulo', title)

    setTitle('')
    setDescription('')
  }

  return (
    <>
      <h1>
        <a href='https://www.youtube.com/watch?v=rLoWMU4L_qE&t=10948s' target='_blank'>
          TaskList
        </a>
      </h1>
      <form action='' onSubmit={handleSubmit}>
        <input placeholder='titulo tarea' onChange={GuardarTitulo} value={title} required='true' type='text' autoFocus />
        <br />
        <textarea
          placeholder='descripcion tarea'
          onChange={GuardarDescripcion}
          value={description}
          required='true'
          name='descripcion_tarea'
          cols='30'
          rows='3'
        ></textarea>
        <br />
        <button>Guardar</button>
      </form>
    </>
  )
}
