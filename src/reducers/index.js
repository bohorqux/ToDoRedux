import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import {
  CREATE_TODO,
  DELETE_TODO,
  EDIT_TODO,
  SELECTED_TODO,
  UPDATE_TODO,
} from "../actions/types";
import _ from "lodash";

const selectedToDoReducer = (state = null, action) => {
  if (action.type === SELECTED_TODO) {
    return action.payload;
  }
  if (action.type === DELETE_TODO) {
    return null;
  }
  if (action.type === UPDATE_TODO) {
    return action.payload;
  }
  return state;
};

const toDoReducer = (state = [], action) => {
  if (action.type === CREATE_TODO) {
    return [...state, action.payload];
  }
  if (action.type === DELETE_TODO) {
    let newState = _.omitBy(state, action.payload);
    newState = Object.values(newState);
    return newState;
  }
  if (action.type === UPDATE_TODO) {
    /*essentially, creating a new object, with a new field
      that contains the updated array. We then return that field
      as our new state. Not the most elegant solution, but it works.

      Solution: https://stackoverflow.com/
      questions/39010321/replacing-an-object-in-an-object-array-in-redux-
      store-using-javascript-lodash
    */
    const updated = {
      ...state,
      newState: state.map((todo) => {
        if (todo.id === action.payload.id) {
          return action.payload;
        }
        return todo;
      }),
    };
    return updated.newState;
  }

  return state;
};

const editReducer = (state = false, action) => {
  if (action.type === EDIT_TODO) {
    return action.payload;
  }
  return state;
};

export default combineReducers({
  todos: toDoReducer,
  selected: selectedToDoReducer,
  edited: editReducer,
  form: formReducer,
});
