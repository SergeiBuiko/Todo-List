import { IconButton, Paper, TextField } from '@mui/material';
import { ChangeEvent, useState } from 'react';
import { useTodo } from '../../utils';
import AddIcon from '@mui/icons-material/AddBoxOutlined';
import styles from './TodoContent.module.css';

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
    <Paper elevation={3} className={styles.paper}>
      <TextField
        placeholder="Add a new task"
        className={styles.textfield}
        value={todoValue}
        onChange={addTodo}
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
