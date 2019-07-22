import { ADD_TODO, UPDATE_COMPLETE, DELETE_TODO } from "./actions";
import { combineReducers } from "redux";

const TODOS_INITIAL_STATE = [];
// const INITIAL_STATE = {
//   completedTodos: TODOS_INITIAL_STATE,
//   incompleteTodos: TODOS_INITIAL_STATE
// };

function addTodoReducer(state, update) {
  return [...state, update];
}

function deleteTodoReducer(state, { todo }) {
  return state.filter(eachtodo => {
    return todo.id !== eachtodo.id;
  });
}

function updateTodoCompleteRecuder(state, { todo }) {
  const updatedTodo = {
    ...todo,
    completed: !todo.completed
  };
  const mystate = state.map(eachtodo => {
    if (eachtodo.id === todo.id) {
      return updatedTodo;
    } else {
      return eachtodo;
    }
  });
  return mystate;
}

function todoReducers(state = TODOS_INITIAL_STATE, action) {
  switch (action.type) {
    case ADD_TODO:
      return addTodoReducer(state, action.payload);
    case UPDATE_COMPLETE:
      return updateTodoCompleteRecuder(state, action.payload);
    case DELETE_TODO:
      return deleteTodoReducer(state, action.payload);
    default:
      return state;
  }
}

export const rootReducer = combineReducers({
  todos: todoReducers
});

//todoReducers;
//  combineReducers({
//   todoReducers
// });
