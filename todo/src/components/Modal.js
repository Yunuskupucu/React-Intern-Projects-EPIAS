import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "../style/Modal.css";
import "../style/TaskCreate.css";
import { useDispatch, useSelector } from "react-redux";
import { addTodoAction, onUpdate, closeModal } from "../pages/todo/reducer";
import dayjs from "dayjs";

const Modal = ({ onClose, task }) => {
  const dispatch = useDispatch();
  const { showEdit } = useSelector((store) => store.todo);
  const [title, setTitle] = useState("");
  const [taskDesc, setTaskDesc] = useState("");
  const [selectedTime, setSelectedTime] = useState(dayjs());

  useEffect(() => {
    if (task) {
      setTitle(task.title);
      setTaskDesc(task.taskDesc);
      setSelectedTime(dayjs(task.selectedTime));
    } else {
      setTitle("");
      setTaskDesc("");
      setSelectedTime(dayjs());
    }
  }, [task, showEdit]);

  const handleChange = (event) => {
    setTitle(event.target.value);
  };
  const handleTaskChange = (event) => {
    setTaskDesc(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const taskPayload = {
      title,
      taskDesc,
      selectedTime: selectedTime.toISOString(),
    };

    if (showEdit && task) {
      dispatch(onUpdate({ id: task.id, ...taskPayload }));
    } else {
      dispatch(addTodoAction(taskPayload));
    }
    dispatch(closeModal());
    setTitle("");
    setTaskDesc("");
    setSelectedTime(dayjs());
    onClose();
  };

  return (
    <div
      className="modal-container"
      onClick={(e) => e.target.className === "modal-container" && onClose()}
    >
      <div className="pop-up">
        <div className="modal-content">
          {showEdit ? (
            <div className="task-update">
              <form className="task-form" onSubmit={handleSubmit}>
                <label className="edit-label">Edit the Task</label>
                <label className="task-label">Title</label>
                <input
                  value={title}
                  onChange={handleChange}
                  className="task-input"
                />
                <label className="task-label">Description</label>
                <input
                  value={taskDesc}
                  onChange={handleTaskChange}
                  className="task-input"
                />
                <div className="date">
                  <label>Date</label>
                  <DatePicker
                    selected={selectedTime.toDate()}
                    onChange={(date) => setSelectedTime(dayjs(date))}
                  />
                </div>
                <button type="submit" className="task-button update-button">
                  Edit
                </button>
              </form>
            </div>
          ) : (
            <div className="task-create">
              <form className="task-form" onSubmit={handleSubmit}>
                <label className="task-label">Title</label>
                <input
                  value={title}
                  onChange={handleChange}
                  className="task-input"
                />
                <label className="task-label">Description</label>
                <input
                  value={taskDesc}
                  onChange={handleTaskChange}
                  className="task-input"
                />
                <div className="date">
                  <label>Date</label>
                  <DatePicker
                    selected={selectedTime.toDate()}
                    onChange={(date) => setSelectedTime(dayjs(date))}
                  />
                </div>
                <button type="submit" className="task-button">
                  Create
                </button>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Modal;
