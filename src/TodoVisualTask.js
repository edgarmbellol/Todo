import React from 'react'
import './TodoVisualTask.css'

function TodoVisualTask(props) {
  return (
    <div className='TodoVisualTask'>
        {props.children}
    </div>
    
  )
}

export {TodoVisualTask}