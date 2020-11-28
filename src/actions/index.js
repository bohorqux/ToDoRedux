import {
  SELECTED_TODO,
  CREATE_TODO,
  DELETE_TODO,
  EDIT_TODO,
  UPDATE_TODO,
} from "./types";

//Action Creator
export const selectToDo = (todo) => {
  //return an action
  return {
    type: SELECTED_TODO,
    payload: todo,
  };
};

export const createToDo = (todo) => {
  return {
    type: CREATE_TODO,
    payload: todo,
  };
};

export const deleteToDo = (todo) => {
  return {
    type: DELETE_TODO,
    payload: todo,
  };
};

export const editToDo = (bool) => {
  return {
    type: EDIT_TODO,
    payload: bool,
  };
};

export const updateToDo = (todo) => {
  return {
    type: UPDATE_TODO,
    payload: todo,
  };
};
