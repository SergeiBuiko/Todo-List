import { Header, Main } from './components';
import styles from './App.module.css';
import { Box } from '@mui/material';

export const App = () => {
  return (
    <Box className={styles.App}>
      <Header />
      <Main />
    </Box>
  );
};
