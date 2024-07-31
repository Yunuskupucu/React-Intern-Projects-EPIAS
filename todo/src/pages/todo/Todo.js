import Header from "../../layout/Header";
import TaskList from "../../components/TaskList";
import "../../App.css";
import Modal from "../../components/Modal";
import { useSelector, useDispatch } from "react-redux";
import { openModal, closeModal } from "./reducer";

function Todo() {
  const { modalOpen, showEdit, editTask } = useSelector((store) => store.todo);
  const dispatch = useDispatch();
  const handleOpenModal = () => {
    dispatch(openModal());
  };
  const handleCloseModal = () => {
    dispatch(closeModal());
  };

  return (
    <div className="todo">
      <Header />
      <div className="btn-div">
        <button className="btn btn-open" onClick={handleOpenModal}>
          Add
        </button>
      </div>
      <h1>Task List</h1>
      {modalOpen && (
        <Modal onClose={handleCloseModal} showEdit={showEdit} task={editTask} />
      )}
      <TaskList />
    </div>
  );
}

export default Todo;
