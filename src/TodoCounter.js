import './TodoCounter.css'

function TodoCounter({total, completed}){
    return(
        <div className='ContVisualTask'>
            <h1>Your Task</h1>
            <h2>
                Has completado {completed} de {total} TODOS
            </h2>
        </div>
    );
  }

export {TodoCounter}