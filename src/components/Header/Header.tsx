import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';
import { useTodo } from '../../utils';
import styles from './Header.module.css';

export const Header = () => {
  const { todoList } = useTodo();
  return (
    <Box className={styles.box}>
      <Typography
        // className={styles.todolist}
        sx={{ fontSize: 40 }}
        variant="h1"
        component="h1"
        gutterBottom
      >
        Todo list
      </Typography>
      <Typography
        // className={styles.tasks}
        sx={{ fontSize: 30 }}
        variant="h5"
        component="h5"
        gutterBottom
      >
        tasks: {todoList.length}
      </Typography>
    </Box>
  );
};
