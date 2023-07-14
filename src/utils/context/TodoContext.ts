import { createContext } from 'react';
import { ITodo } from '../../types/types';

interface ITodoContextProps {
  editTodoID: ITodo['id'] | null;
  todoList: ITodo[];
  changeTodo: ({ description }: Omit<ITodo, 'id' | 'checked'>) => void;
  deleteTodo: (idTodo: ITodo['id']) => void;
  checkTodo: (idTodo: ITodo['id']) => void;
  editID: (idTodo: ITodo['id']) => void;
  addNewTodo: ({ description }: Omit<ITodo, 'id' | 'checked'>) => void;
}

export const TodoContext = createContext<ITodoContextProps>({
  todoList: [],
  editTodoID: null,
  changeTodo: () => {},
  deleteTodo: () => {},
  checkTodo: () => {},
  editID: () => {},
  addNewTodo: () => {},
});
