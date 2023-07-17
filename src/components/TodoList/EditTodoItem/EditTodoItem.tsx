import { Button, Paper, TextField } from '@mui/material';
import { ChangeEvent, useState } from 'react';
import styles from './EditTodoItem.module.css';
import { IEditTodoItemProps } from './types';

export const EditTodoItem = ({ todo, changeTodo }: IEditTodoItemProps) => {
  const [editTodo, setEditTodo] = useState({ description: todo.description });

  const onClick = () => {
    changeTodo(editTodo);
  };

  const addTodo = (event: ChangeEvent<HTMLInputElement>) => {
    setEditTodo({ description: event.target.value });
  };

  return (
    <Paper className={styles.paper} elevation={2}>
      <TextField
        className={styles.textfield}
        placeholder="Add your Todo"
        value={editTodo.description}
        onChange={addTodo}
      />
      <Button color="success" onClick={onClick} className={styles.button}>
        Edit
      </Button>
    </Paper>
  );
};
