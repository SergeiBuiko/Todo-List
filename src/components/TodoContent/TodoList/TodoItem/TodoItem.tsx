import { Box, IconButton, Paper, Typography } from '@mui/material';
import CloseSharpIcon from '@mui/icons-material/CloseSharp';
import EditIcon from '@mui/icons-material/Edit';
import { ITodo } from '../../../../types/types';

import Check from '@mui/icons-material/CheckBoxSharp';
import CheckBox from '@mui/icons-material/CheckBoxOutlineBlankSharp';

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
      elevation={3}
      sx={{
        display: 'flex',
        padding: { xs: '1px 1px ', sm: '10px 20px', md: '20px 30px' },
        justifyContent: 'space-between',
        marginTop: '20px',
        width: '100%',
        gap: 2,
        opacity: todo.checked ? 0.5 : 1,
        cursor: 'pointer',
      }}
    >
      <Box
        display={'flex'}
        alignItems={'center'}
        width={{ xs: '65%', md: 'auto' }}
      >
        <Typography
          onClick={() => checkTodo(todo.id)}
          variant="h6"
          component="div"
          display="flex"
          alignItems="center"
          fontSize={'20px'}
          sx={{
            textDecoration: todo.checked ? 'line-through' : 'none',
            fontSize: { xs: '16px', sm: '16px', md: '20px' },
          }}
        >
          <IconButton
            aria-label="edit"
            color="primary"
            sx={{ '&:hover': { color: 'green' }, transition: '0.3s' }}
          >
            {todo.checked ? <Check color="success" /> : <CheckBox />}
          </IconButton>

          {todo.description}
        </Typography>
      </Box>
      <Box
        width={{ xs: '35%', sm: 'auto', md: 'auto' }}
        display={'flex'}
        justifyContent={'flex-end'}
      >
        <IconButton
          aria-label="edit"
          color="primary"
          sx={{ '&:hover': { color: 'green' }, transition: '0.3s' }}
          onClick={() => editID(todo.id)}
        >
          <EditIcon />
        </IconButton>
        <IconButton
          color="primary"
          aria-label="cancel"
          sx={{ '&:hover': { color: 'red' }, transition: '0.3s' }}
          onClick={() => deleteTodo(todo.id)}
        >
          <CloseSharpIcon />
        </IconButton>
      </Box>
    </Paper>
  );
};
