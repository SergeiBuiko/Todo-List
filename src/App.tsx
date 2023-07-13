import { Header, Main, TodoList } from './components';
import styles from './App.module.css';
import { Box } from '@mui/material';
import { useState } from 'react';
import { TODOLIST } from './const/const';
import { ITodo } from './types/types';

export const App = () => {
  const [todoList, setTodoList] = useState(TODOLIST);
  const [editTodoID, setEditTodoId] = useState<number | null>(null);

  const deleteTodo = (idTodo: ITodo['id']) => {
    setTodoList(todoList.filter((todoEl) => todoEl.id !== idTodo));
  };

  const editID = (idTodo: ITodo['id']) => {
    setEditTodoId(idTodo);
  };

  const addNewTodo = ({ description }: Omit<ITodo, 'id' | 'checked'>) => {
    setTodoList([
      ...todoList,
      {
        id: todoList[todoList.length - 1].id + 1,
        description,
        checked: false,
      },
    ]);
  };

  const checkTodo = (idTodo: ITodo['id']) => {
    setTodoList(
      todoList.map((todo) => {
        if (todo.id === idTodo) {
          return { ...todo, checked: !todo.checked };
        }
        return todo;
      })
    );
  };

  return (
    <Box className={styles.App}>
      <Header />
      <Main addNewTodo={addNewTodo} />
      <TodoList
        todoList={todoList}
        deleteTodo={deleteTodo}
        checkTodo={checkTodo}
        editID={editID}
      />
    </Box>
  );
};
