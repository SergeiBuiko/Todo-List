/* eslint-disable @typescript-eslint/no-unused-vars */
import { Header, TodoContent, TodoList } from './components';
import styles from './App.module.css';
import { Box } from '@mui/material';
import { TodoProvider } from './utils';

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
