/* eslint-disable react/prop-types */

import { useContext } from 'react'
import { TaskContext } from './../../context/TaskContext'

export const TaskCard = ({ task /* , deleteTask */ }) => {
  /* const valor = useContext(TaskContext)
  console.log("🚀 ~ file: TaskCard.jsx:8 ~ TaskCard ~ valor:", valor) */

  const { deleteTask } = useContext(TaskContext)

  return (
    <>
      <li>{task.id}</li>
      <li>{task.title}</li>
      <li>{task.description}</li>
      <li>
        <img src={task.image} alt='image' style={{ maxWidth: '100px' }} />
      </li>
      <button onClick={() => deleteTask(task.id)}>eliminar {task.title}</button>
      <br /> <br />
    </>
  )
}
