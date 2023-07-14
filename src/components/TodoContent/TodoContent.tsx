import { Button, Paper, TextField } from '@mui/material';
import { ChangeEvent, useState } from 'react';
import { useTodo } from '../../utils';

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
      elevation={2}
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '30px',
        width: '50%',
      }}
    >
      <TextField
        placeholder="Add your Todo"
        value={todoValue}
        onChange={addTodo}
        sx={{ width: '70%' }}
      />
      <Button sx={{ height: 40 }} onClick={onClick}>
        Add Todo
      </Button>
    </Paper>
  );
};
