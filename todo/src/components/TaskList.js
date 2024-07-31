import { useSelector } from "react-redux";
import TaskShow from "../components/TaskShow";
import "../style/TaskList.css";

function TaskList() {
  const { todo } = useSelector((store) => store.todo);

  return (
    <div className="task-list">
      <table className="table table-hover ">
        <thead>
          <tr className="table-data">
            <th scope="col">Task</th>
            <th scope="col">Descripton</th>
            <th scope="col">Date</th>
            <th scope="col">Delete/Edit</th>
          </tr>
        </thead>
        <tbody className="table-data">
          {todo.map((task, index) => {
            return <TaskShow key={index} task={task} />;
          })}
        </tbody>
      </table>
    </div>
  );
}

export default TaskList;
