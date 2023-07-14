import { Box } from '@mui/material';
import { TodoItem } from './TodoItem/TodoItem';
import { EditTodoItem } from './EditTodoItem/EditTodoItem';
import { useTodo } from '../../../utils';

export const TodoList = () => {
  const { todoList, changeTodo, deleteTodo, editID, editTodoID, checkTodo } =
    useTodo();
  return (
    <Box width="50%">
      {todoList.map((todo) => {
        if (todo.id === editTodoID) {
          return (
            <EditTodoItem
              key={todo.id}
              todo={todo}
              changeTodo={changeTodo}
            ></EditTodoItem>
          );
        }
        return (
          <TodoItem
            key={todo.id}
            todo={todo}
            deleteTodo={deleteTodo}
            checkTodo={checkTodo}
            editID={editID}
          />
        );
      })}
    </Box>
  );
};
