import logo from './logo.svg';
import React from 'react';
import './ContGeneral.css'
import { TodoCounter } from './TodoCounter.js';
import { TodoSearch } from './TodoSearch.js';
import { TodoList } from './TodoList.js';
import { TodoItem } from './TodoItem.js';
import { CreateTodoButton } from './CreateTodoButton.js';
import { TodoCreateTask } from './TodoCreateTask.js';
import { TodoVisualTask } from './TodoVisualTask.js';

const defaultTodos =[
  { text: 'Cortar cebolla', completed: true },
  { text: 'Tomar Curso Intro a React.js', completed: false },
  { text: 'Llorar con la Llorona', completed: false },
];

function App() {
  return (
    // Se utiliza React.Fragment para que solo retorne una cosa ya que los demas elementos tambien retornan
    // es como para tener un conglomerado de todos los return
    <React.Fragment>
      {/* Div que contiene a los dos div  */}
      <div className='ContGeneral'>
        <TodoCreateTask/>
        <TodoVisualTask>
          <TodoCounter completed={16} total={25} />
          <TodoSearch/>
          <TodoList>
            {defaultTodos.map(todo => (
              <TodoItem 
              key={todo.text} 
              text={todo.text}
              completed = {todo.completed} 
              />
            ))}
          </TodoList>
          <CreateTodoButton/>
        </TodoVisualTask>
      </div>
      
      <TodoCounter completed={16} total={25} />
      <TodoSearch/>

      <TodoList>
        {defaultTodos.map(todo => (
          <TodoItem 
          key={todo.text} 
          text={todo.text}
          completed = {todo.completed} 
          />
        ))}
      </TodoList>

      <CreateTodoButton/>
    </React.Fragment>
  );
}


export default App;
