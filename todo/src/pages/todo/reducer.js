import { createSlice } from "@reduxjs/toolkit";
import dayjs from "dayjs";

const initialState = {
  todo: [],
  editTask: null,
  showEdit: false,
  modalOpen: false,
};

export const todoList = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodoAction: (state, action) => {
      const newTask = {
        id: Math.round(Math.random() * 999),
        title: action.payload.title,
        taskDesc: action.payload.taskDesc,
        selectedTime: dayjs(action.payload.selectedTime).toISOString(),
      };
      state.todo.push(newTask);
    },
    deleteTodoAction: (state, action) => {
      state.todo = state.todo.filter((task) => task.id !== action.payload);
    },
    editTaskById: (state, action) => {
      const taskToEdit = state.todo.find((task) => task.id === action.payload);
      if (taskToEdit) {
        state.editTask = taskToEdit;
        state.showEdit = true;
        state.modalOpen = true;
      }
    },
    onUpdate: (state, action) => {
      const { id, title, taskDesc, selectedTime } = action.payload;
      state.todo = state.todo.map((task) =>
        task.id === id
          ? {
              ...task,
              title,
              taskDesc,
              selectedTime: dayjs(selectedTime).toISOString(),
            }
          : task
      );
      state.showEdit = false;
      state.modalOpen = false;
    },
    openModal: (state) => {
      state.modalOpen = true;
    },
    closeModal: (state) => {
      state.modalOpen = false;
      state.editTask = null;
    },
  },
});

export const {
  addTodoAction,
  deleteTodoAction,
  editTaskById,
  onUpdate,
  openModal,
  closeModal,
} = todoList.actions;
export default todoList.reducer;
