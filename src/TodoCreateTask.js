import React from 'react'
import './TodoCreateTask.css'

function TodoCreateTask() {
  return (
    <div className='divCreateTask'>
        <p className='title'>Hello,</p>
        <p className='sub-title'>Create Task</p>
        <input placeholder='Enter the task'></input>
        <button>Create Task</button>
        <button>Cancelar</button>
    </div>
  )
}

export {TodoCreateTask}