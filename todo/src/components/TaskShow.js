// TaskShow.js
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt, faEdit } from "@fortawesome/free-solid-svg-icons";
import dayjs from "dayjs";
import "../style/TaskShow.css";
import { useDispatch } from "react-redux";
import {
  deleteTodoAction,
  editTaskById,
  openModal,
} from "../pages/todo/reducer";

function TaskShow({ task }) {
  const dispatch = useDispatch();
  const handleDeleteClick = (id) => {
    dispatch(deleteTodoAction(id));
  };
  const handleEditClick = () => {
    dispatch(openModal());
    dispatch(editTaskById(task.id));
  };

  return (
    <tr>
      <td>{task.title}</td>
      <td>{task.taskDesc}</td>
      <td>{dayjs(task.selectedTime).format("DD/MM/YYYY")}</td>
      <td>
        <button
          className="task-delete"
          onClick={() => handleDeleteClick(task.id)}
        >
          <FontAwesomeIcon icon={faTrashAlt} />
        </button>
        <button className="task-edit" onClick={handleEditClick}>
          <FontAwesomeIcon icon={faEdit} />
        </button>
      </td>
    </tr>
  );
}

export default TaskShow;
