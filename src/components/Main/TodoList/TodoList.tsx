import { Box } from '@mui/material';
import { TodoItem } from './TodoItem/TodoItem';
import { ITodo } from '../../../types/types';

interface ITodoListProps {
  todoList: ITodo[];
  deleteTodo: (idTodo: ITodo['id']) => void;
  checkTodo: (idTodo: ITodo['id']) => void;
  editID: (idTodo: ITodo['id']) => void;
}

export const TodoList = ({
  todoList,
  deleteTodo,
  checkTodo,
  editID,
}: ITodoListProps) => {
  return (
    <Box width="50%">
      {todoList.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          deleteTodo={deleteTodo}
          checkTodo={checkTodo}
          editID={editID}
        />
      ))}
    </Box>
  );
};
