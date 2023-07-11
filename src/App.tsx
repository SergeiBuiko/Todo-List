import { ThemeProvider, createTheme } from '@mui/material';
import { pink, purple } from '@mui/material/colors';
import { Route, Routes } from 'react-router-dom';
import styles from './App.module.css';

const darkTheme = createTheme({
  palette: {
    primary: purple,
    secondary: pink,
  },
});

export function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <div className={styles['main-page__container']}>
        <div className={styles.content}>
          <Routes>
            <Route path="/" />
          </Routes>
          <h1>Hello!</h1>
        </div>
      </div>
    </ThemeProvider>
  );
}
