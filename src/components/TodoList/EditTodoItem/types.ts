import { ITodo } from '../../../types/types';

export interface IEditTodoItemProps {
  todo: ITodo;
  changeTodo: ({ description }: Omit<ITodo, 'id' | 'checked'>) => void;
}
