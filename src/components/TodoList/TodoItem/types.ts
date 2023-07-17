import { ITodo } from '../../../types/types';

export interface ITodoItemProps {
  todo: ITodo;
  deleteTodo: (idTodo: ITodo['id']) => void;
  checkTodo: (idTodo: ITodo['id']) => void;
  editID: (idTodo: ITodo['id']) => void;
}
