import React from 'react';
import './TodoSearch.css';

function TodoSearch({valorBuscado,setValorBuscado}) {

  return (
    <input
      placeholder="Buscar..."
      className="TodoSearch"
      value={valorBuscado}
      onChange = {(event)=> {
        console.log("Diste click en el input");
        console.log(event.target.value);
        setValorBuscado(event.target.value);
      }}
    />
  );
}

export { TodoSearch };
