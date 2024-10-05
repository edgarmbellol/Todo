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
  const [todos, setTodos] = React.useState(defaultTodos);   
  const completeTodos = todos.filter(todo => todo.completed).length;
  const totalTodos = todos.length

  // Tomar el valor escrito en el todosearch
  const [valorBuscado,setValorBuscado] = React.useState('');

  // Filtra el valor en los Todo disponibles
  const mostrarTodos = todos.filter(todo => 
    todo.text.toLocaleLowerCase().includes(valorBuscado));

  // Funciones para completar y eliminar tareas
  const completeTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text == text
    );
    newTodos[todoIndex].completed = true;
    setTodos(newTodos);
  };

  const deleteTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text == text
    );
    newTodos.splice(todoIndex, 1);
    setTodos(newTodos);
  };

  const createTask = (text) => {
    if (text == ''){
      console.log('Tarea Vacia')
      return
    }
    const newTodos = [...todos];
    // Buscar si hay alguna tarea con el mismo nombre
    const repeat = newTodos.findIndex(
      (todo) => todo.text == text
    );

    if (repeat != -1){
      // Si entra quiere decir que ya hay una tarea con este nombre
      console.log('Ya existe una tarea con este nombre')
      return
    }
    newTodos.push({text: text,completed: false});
    setTodos(newTodos);
  };
  return (
    <>
      {/* Contenedor que tiene la opcion de crear tareas */}
      <div className='contenedor-tarea'>
          <h1>Crear una tarea</h1>
          <CrearTarea
          onCreateTask={createTask}
          ></CrearTarea>
      </div>
      {/* Contenedor que tiene la visualizacion de tareas */}
      <div className='contenedor-pendientes'>
          <h1>Tus Tareas</h1>
          <TodoCounter
            completed={completeTodos}
            total={totalTodos}
          ></TodoCounter>
          <TodoSearch
          valorBuscado={valorBuscado}
          setValorBuscado={setValorBuscado}
          ></TodoSearch>
          <TodoList>
          {mostrarTodos.map(todo => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
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
