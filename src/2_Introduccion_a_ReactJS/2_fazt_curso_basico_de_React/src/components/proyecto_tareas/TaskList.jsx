/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable react-hooks/exhaustive-deps */

import { TaskCard } from './TaskCard'

import { useContext } from 'react'
import { TaskContext } from './../../context/TaskContext'

const TaskList = (/* { tasks, deleteTask } */) => {
  const { tasks } = useContext(TaskContext)

  return (
    <>
      {tasks.length === 0 ? (
        <p>SIN tareas</p>
      ) : (
        tasks.map((task) => {
          return (
            <>
              <TaskCard key={task.id} task={task} /* deleteTask={deleteTask} */ />
            </>
          )
        })
      )}
    </>
  )
}

export default TaskList
