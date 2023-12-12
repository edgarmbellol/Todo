import './TodoItem.css'

function TodoItem(props) {
  return (
    <li className="cont-task">
      <span className='icon-task'>
        V
      </span>
      <p>{props.text}</p>
      <span className='delete'>
        X
      </span>
    </li>
  );
}

export { TodoItem }
