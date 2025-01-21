import { Todo } from "./Todo";

export type TodoState = Todo[];

type TodoWithOptionalProps = {
  [key in keyof Todo]? : Todo[key]
}

type AddTodo = {
  type: "ADD_TODO",
  payload: Todo | Todo[]
}

type ChangeTodo = {
  type: 'CHANGE_TODO',
  payload: TodoWithOptionalProps & { index: number}
}

type DeleteTodo = {
  type: 'DELETE_TODO',
  payload: { index: number}
}

export type TodoActions = AddTodo | ChangeTodo | DeleteTodo;