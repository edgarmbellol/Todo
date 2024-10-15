import { MdCheckCircle } from "react-icons/md";
import { MdCancel } from "react-icons/md";
import './TodoIcon.css';

const iconTypes = {
    'check': (color)=><MdCheckCircle 
    className="Icon-svg" fill={color}/>,
    'delete': (color)=><MdCancel
     className="Icon-svg" fill={color}/>,
};

function TodoIcon({type, color, onClick}){
    return(
        <span
            className={`Icon Icon-svg Icon-${type}`}
            onClick = {onClick}
        >
            {iconTypes[type](color)}
        </span>
    );
}

export {TodoIcon};