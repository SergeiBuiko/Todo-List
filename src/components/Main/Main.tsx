import { Button, Paper, TextField } from '@mui/material';
import { ChangeEvent, useState } from 'react';

export const Main = () => {
  const [todoValue, setTodoValue] = useState('');
  const addTodo = (event: ChangeEvent<HTMLInputElement>) => {
    setTodoValue(event.target.value);
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
      <Button sx={{ height: 40 }} onClick={() => setTodoValue(' ')}>
        Add Todo
      </Button>
    </Paper>
  );
};
