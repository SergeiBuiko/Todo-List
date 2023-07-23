import { Box } from '@mui/material';
import { TodoItem } from './TodoItem/TodoItem';
import { EditTodoItem } from './EditTodoItem/EditTodoItem';
import { useTodo } from '../../utils';
// import { useAppDispatch, useAppSelector } from '../../hooks/redux';
// import { NoteSlice } from '../../store/reducers/NoteSlice';

export const TodoList = () => {
  const { todoList, changeTodo, deleteTodo, editID, editTodoID } = useTodo();

  // const { checkTodo } = useAppSelector((state) => state.noteReducer);
  // const { checkNoteToComplete } = NoteSlice.actions;
  // const dispatch = useAppDispatch();
  return (
    <Box width={{ xs: '90%', md: '60%' }}>
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
            // checkTodo={checkTodo}
            editID={editID}
          />
        );
      })}
    </Box>
  );
};
