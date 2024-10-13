import './TodoCounter.css';

function TodoCounter({ total, completed }) {
  let texto = '';
  if (total==completed){
    texto = "Haz completado todas tus tareas";
  }
  else{
    texto = "Has completado " + completed + " de " + total + " TODOs"; 
  }
  return (
    <h2 className="TodoCounter">
      {texto}
      {/* Has completado <span>{completed}</span> de <span>{total}</span> TODOs */}
    </h2>
  );
}

export { TodoCounter };
