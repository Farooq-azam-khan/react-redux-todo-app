import uuid from "uuid";

export const ADD_TODO = "ADD_TODO";
export const UPDATE_COMPLETE = "UPDATE_COMPLETE";
export const DELETE_TODO = "DELETE_TODO";

export const addTodoAction = text => ({
  type: ADD_TODO,
  payload: {
    id: uuid.v4(),
    text: text,
    completed: false
  }
});

export const updateTodoCompleteAction = todo => ({
  type: UPDATE_COMPLETE,
  payload: {
    todo
  }
});

export const deleteTodoAction = todo => ({
  type: DELETE_TODO,
  payload: {
    todo
  }
});
