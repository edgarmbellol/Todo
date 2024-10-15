import React from "react";
import { TodoIcon } from "./TodoIcon";

function CreateIcon({completed , onComplete}){
    return(
        <TodoIcon
            type = "check"
            color = {completed ? "green" : "gray"}
            onClick = {onComplete}
        >

        </TodoIcon>
    );
}

export {CreateIcon};