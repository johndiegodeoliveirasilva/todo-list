import { TodoActions, TodoState } from "../../@types/TodoReducer";

export const initialState: TodoState = []


export const TodoReducer = (state: TodoState, action: TodoActions): TodoState => {
  switch(action.type) {
    case 'ADD_TODO':
        const { payload } = action

        return !Array.isArray(payload) ? [...state, payload] : payload

    case 'CHANGE_TODO': {
        const changedTodos = state.map((todo, index) => {
          if (index === action.payload.index) {
            
            todo.title = action.payload.title ?? todo.title;
            todo.isDone = action.payload.isDone || todo.isDone;
            return todo;
          }

          return todo;
        });
        return changedTodos;
    }

    case 'DELETE_TODO': 
      return state.filter((_, key) => key !== action.payload.index)
    default:
      return state
  }
}