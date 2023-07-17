import { Header } from './components';
import styles from './App.module.css';
import { Box } from '@mui/material';
import { TodoProvider } from './utils';
import { TodoList } from './components';
import { TodoContent } from './components';

export const App = () => {
  return (
    <TodoProvider>
      <Box className={styles.App}>
        <Header />
        <TodoContent />
        <TodoList />
      </Box>
    </TodoProvider>
  );
};
