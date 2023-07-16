import { IconButton, Paper, TextField } from '@mui/material';
import { ChangeEvent, useState } from 'react';
import { useTodo } from '../../utils';
import AddIcon from '@mui/icons-material/AddBoxOutlined';

export const TodoContent = () => {
  const { addNewTodo } = useTodo();
  const [todoValue, setTodoValue] = useState('');

  const addTodo = (event: ChangeEvent<HTMLInputElement>) => {
    setTodoValue(event.target.value);
  };

  const onClick = () => {
    addNewTodo({ description: todoValue });
    setTodoValue('');
  };

  return (
    <Paper
      elevation={3}
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: { xs: '10px 5px 10px 0px', sm: '20px 20px', md: '20px 30px' },
        width: { xs: '90%', md: '60%' },
      }}
    >
      <TextField
        placeholder="Add a new task"
        value={todoValue}
        onChange={addTodo}
        sx={{ width: '85%', padding: '1px 14px' }}
      />

      <IconButton
        aria-label="add"
        color="primary"
        size="small"
        sx={{
          '&:hover': { color: 'green' },
          transition: '0.3s',
        }}
        onClick={onClick}
      >
        <AddIcon />
      </IconButton>
    </Paper>
  );
};
