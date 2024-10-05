// Este componente contiene todo para crear la seccion para crear una tarea
import react from 'react';
import './CrearTarea.css';
import { CreateTodoButton } from './CreateTodoButton';
import tareas from './tareas.png'; // Importa la imagen desde la misma carpeta


function CrearTarea({onCreateTask}){
    const [nameTask,setNameTask] = react.useState('');
    return(
        <div className='contenedor-crear-tarea'>
            <span>Nombre Tarea</span>
            <input
                value={nameTask}
                onChange={(e)=>setNameTask(e.target.value)}
                type='text' placeholder='Escribe tu tarea aqui'></input>
            <button
                onClick={() => {
                    onCreateTask(nameTask);
                    setNameTask('');
                }}
            >Crear tarea</button>
            <div className='contenedor-imagen'>
                <img src={tareas} alt="Logo" />
            </div>
        </div> 
    );
}
export {CrearTarea};