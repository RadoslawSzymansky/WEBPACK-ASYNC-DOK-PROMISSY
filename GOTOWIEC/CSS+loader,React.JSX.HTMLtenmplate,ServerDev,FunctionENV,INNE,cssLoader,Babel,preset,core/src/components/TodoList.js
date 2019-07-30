import React from "react";
import PropTypes from 'prop-types';
import style from "./TodoList.css"
const ToDoList = props => {
    const list = props.list.map(task => (
        <li key={task.id} id={task.id}>
            {task.text}
            <button onClick={props.remove.bind(null, task.id)}>
                Usuń
            </button>
        </li>
    ))
    return (
        <ul className={style.taskList}>
            {list}
        </ul>
    )
}
ToDoList.propTypes = {
    remove: PropTypes.func.isRequired,
    list: PropTypes.array.isRequired
}
export default ToDoList;