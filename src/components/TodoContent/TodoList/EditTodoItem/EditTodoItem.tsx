import { Button, Paper, TextField } from '@mui/material';
import { ITodo } from '../../../../types/types';
import { ChangeEvent, useState } from 'react';
import styles from './EditTodoItem.module.css';

interface IEditTodoItemProps {
  todo: ITodo;
  changeTodo: ({ description }: Omit<ITodo, 'id' | 'checked'>) => void;
}

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
