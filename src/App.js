import React from 'react';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';
import { CrearTarea } from './CrearTarea';

import './App.css';


const defaultTodos = [
  { text: 'Cortar cebolla', completed: true },
  { text: 'Tomar el Curso de Intro a React.js', completed: false },
  { text: 'Llorar con la Llorona', completed: false },
  { text: 'LALALALALA', completed: false },
];

function App() {
  return (
    <>
      {/* Contenedor que tiene la opcion de crear tareas */}
      <div className='contenedor-tarea'>
          <h1>Crear una tarea</h1>
          <CrearTarea></CrearTarea>
      </div>
      {/* Contenedor que tiene la visualizacion de tareas */}
      <div className='contenedor-pendientes'>
          <h1>Tus Tareas</h1>
          <TodoCounter></TodoCounter>
          <TodoSearch></TodoSearch>
          <TodoList>
          {defaultTodos.map(todo => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
          />
          ))}
      </TodoList>
      </div>
      {/* <TodoCounter completed={16} total={25} />
      <TodoSearch />

      <TodoList>
        {defaultTodos.map(todo => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
          />
        ))}
      </TodoList>
      
      <CreateTodoButton /> */}
    </>
  );
}

export default App;