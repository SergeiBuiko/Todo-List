import { ReactNode, useMemo, useState } from 'react';
import { ITodo } from '../../types/types';
import { TODOLIST } from '../../const/const';
import { TodoContext } from './TodoContext';

interface ITodoProviderProps {
  children: ReactNode;
}

export const TodoProvider = ({ children }: ITodoProviderProps) => {
  const [todoList, setTodoList] = useState(TODOLIST);
  const [editTodoID, setEditTodoId] = useState<number | null>(null);

  const deleteTodo = (idTodo: ITodo['id']) => {
    setTodoList(todoList.filter((todoEl) => todoEl.id !== idTodo));
  };

  const editID = (idTodo: ITodo['id']) => {
    setEditTodoId(idTodo);
  };

  const changeTodo = ({ description }: Omit<ITodo, 'id' | 'checked'>) => {
    setTodoList(
      todoList.map((todo) => {
        if (todo.id === editTodoID) {
          return { ...todo, description };
        }
        return todo;
      })
    );
    setEditTodoId(null);
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

  const value = useMemo(
    () => ({
      todoList,
      editTodoID,
      deleteTodo,
      editID,
      changeTodo,
      addNewTodo,
      checkTodo,
    }),
    [
      todoList,
      editTodoID,
      deleteTodo,
      editID,
      changeTodo,
      addNewTodo,
      checkTodo,
    ]
  );

  return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>;
};