import { Box, Button, Paper, Typography } from '@mui/material';
import { ITodo } from '../../../../types/types';

interface ITodoItemProps {
  todo: ITodo;
  deleteTodo: (idTodo: ITodo['id']) => void;
  checkTodo: (idTodo: ITodo['id']) => void;
  editID: (idTodo: ITodo['id']) => void;
}

export const TodoItem = ({
  todo,
  deleteTodo,
  checkTodo,
  editID,
}: ITodoItemProps) => {
  return (
    <Paper
      elevation={2}
      sx={{
        display: 'flex',
        padding: '20px 30px',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: '20px',
        width: '100%',
        gap: 2,
        opacity: todo.checked ? 0.5 : 1,
        cursor: 'pointer',
      }}
    >
      <Box textAlign="left">
        <Typography
          onClick={() => checkTodo(todo.id)}
          variant="h6"
          component="div"
          gutterBottom
          sx={{
            textDecoration: todo.checked ? 'line-through' : 'none',
          }}
        >
          {todo.description}
        </Typography>
      </Box>
      <Box sx={{ height: 40 }}>
        <Button onClick={() => editID(todo.id)}>Edit</Button>
        <Button onClick={() => deleteTodo(todo.id)}>Delete</Button>
      </Box>
    </Paper>
  );
};
