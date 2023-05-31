/* eslint-disable react/prop-types */

// Archivo q contiene estado de toda la aplicacion

import { createContext, useState, useEffect } from 'react'

// archivo .js con los datos
import { tasks as data } from './../components/proyecto_tareas/data/tasks'

// contexto
export const TaskContext = createContext()

// componente q contiene toda la aplicacion
export const TaskContextProvider = (props) => {
  /* const x = 20; */
  // const tasks = []
  const [tasks, setTasks] = useState([])

  useEffect(() => {
    setTasks(data)
    //console.log(data)
  }, [])

  const createTask = (task) => {
    // guardar una nueva tarea
    setTasks([
      ...tasks,
      {
        id: tasks.length,
        title: `${task.title} ${tasks.length}`,
        description: `${task.description} ${tasks.length}`,
        image: `https://robohash.org/user${tasks.length}`,
      },
    ])
  }

  const deleteTask = (taskId) => {
    // eliminar tarea q contenga el ID del boton al q le estoy dando click
    setTasks(tasks.filter((task) => task.id !== taskId))

    //console.log('tasks', tasks)
    console.log('taskId', taskId)
  }

  return (
    <TaskContext.Provider
      value={{
        tasks,
        deleteTask,
        createTask,
      }}
    >
      <h1>TaskContext</h1>
      {props.children}
    </TaskContext.Provider>
  )
}
