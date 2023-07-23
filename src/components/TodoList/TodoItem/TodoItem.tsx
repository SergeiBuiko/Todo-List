import { Box, IconButton, Paper, Typography } from '@mui/material';
import CloseSharpIcon from '@mui/icons-material/CloseSharp';
import EditIcon from '@mui/icons-material/Edit';
import styles from './TodoItem.module.css';
import Check from '@mui/icons-material/CheckBoxSharp';
import CheckBox from '@mui/icons-material/CheckBoxOutlineBlankSharp';
import { ITodoItemProps } from './types';
import { NoteSlice } from '../../../store/reducers/NoteSlice';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux';

export const TodoItem = ({
  todo,
  deleteTodo,
  // checkTodo,
  editID,
}: ITodoItemProps) => {
  const { checkTodo, count } = useAppSelector((state) => state.noteReducer);
  const { checkNoteToComplete, increment } = NoteSlice.actions;
  const dispatch = useAppDispatch();

  console.log(count);
  console.log(checkTodo);
  return (
    <Paper
      elevation={3}
      className={styles.paper}
      sx={{
        opacity: todo.checkTodo ? 0.5 : 1,
      }}
    >
      <Box className={styles.box}>
        <Typography
          className={styles.typography}
          // onClick={() => dispatch(checkNoteToComplete())}
          onClick={() => dispatch(increment(5))}
          variant="h6"
          component="div"
          sx={{
            textDecoration: checkTodo ? 'line-through' : 'none',
            fontSize: { xs: '16px', sm: '16px', md: '20px' },
          }}
        >
          <IconButton
            aria-label="edit"
            color="primary"
            className={styles.checkbox}
          >
            {todo.checked ? <Check color="success" /> : <CheckBox />}
          </IconButton>

          {todo.description}
        </Typography>
      </Box>
      <Box className={styles.box_button}>
        <IconButton
          className={styles.edit_button}
          aria-label="edit"
          color="primary"
          onClick={() => editID(todo.id)}
        >
          <EditIcon />
        </IconButton>
        <IconButton
          className={styles.close_button}
          color="primary"
          aria-label="cancel"
          onClick={() => deleteTodo(todo.id)}
        >
          <CloseSharpIcon />
        </IconButton>
      </Box>
    </Paper>
  );
};
