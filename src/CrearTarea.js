// Este componente contiene todo para crear la seccion para crear una tarea
import './CrearTarea.css';
import { CreateTodoButton } from './CreateTodoButton';
import tareas from './tareas.png'; // Importa la imagen desde la misma carpeta

function CrearTarea(){
    return(
        <div className='contenedor-crear-tarea'>
            <span>Nombre Tarea</span>
            <input type='text' placeholder='Escribe tu tarea aqui'></input>
            <button>Crear tarea</button>
            <div className='contenedor-imagen'>
                <img src={tareas} alt="Logo" />
            </div>
        </div> 
    );
}
export {CrearTarea};