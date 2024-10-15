  import './TodoItem.css';
  import { CreateIcon } from './CreateIcon';
  import { DeleteIcon } from './DeleteIcon';

function TodoItem(props) {
  return (
    <li className="TodoItem">
      <CreateIcon
        completed = {props.completed}
        onComplete = {props.onComplete}
      >
      </CreateIcon>
      <p className={`TodoItem-p ${props.completed && "TodoItem-p--complete"}`}
      >
        {props.text}
      </p>
      <DeleteIcon
        onDelete = {props.onDelete}
      >
      </DeleteIcon>
    </li>
  );
}

export { TodoItem };