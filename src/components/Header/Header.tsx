import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';
import { useTodo } from '../../utils';
import styles from './Header.module.css';

export const Header = () => {
  const { todoList } = useTodo();
  return (
    <Box className={styles.box}>
      <Typography
        className={styles.todolist}
        sx={{ fontSize: 30 }}
        variant="h2"
        component="h2"
      >
        Todo list
      </Typography>
      <Typography
        className={styles.tasks}
        sx={{ fontSize: 25 }}
        variant="h5"
        component="h5"
      >
        tasks: {todoList.length}
      </Typography>
    </Box>
  );
};
