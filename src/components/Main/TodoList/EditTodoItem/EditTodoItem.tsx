import { Box, Button, Paper, TextField } from '@mui/material';
import { ITodo } from '../../../../types/types';
import { useState } from 'react';

interface IEditTodoItemProps {
  todo: ITodo;
  changeTodo: ({ description }: Omit<ITodo, 'id' | 'checked'>) => void;
}

export const EditTodoItem = ({ todo, changeTodo }: IEditTodoItemProps) => {
  const [editTodo, setEditTodo] = useState({ description: todo.description });

  const onClick = () => {
    addNewTodo({ description: todoValue });
    setTodoValue('');
  };

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
        cursor: 'pointer',
      }}
    >
      <TextField
        placeholder="Add your Todo"
        value={todo.description}
        onChange={addTodo}
        sx={{ width: '70%' }}
      />
      <Button sx={{ height: 40 }} onClick={onClick}>
        Edit
      </Button>
    </Paper>
  );
};
