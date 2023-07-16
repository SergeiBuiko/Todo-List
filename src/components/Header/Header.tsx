import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';
import { useTodo } from '../../utils';

export const Header = () => {
  const { todoList } = useTodo();
  return (
    <Box
      display={'flex'}
      width={{ xs: '90%', md: '60%' }}
      alignItems={'center'}
      justifyContent={'space-between'}
    >
      <Typography
        sx={{ fontSize: 40 }}
        variant="h1"
        component="h1"
        gutterBottom
      >
        Todo list
      </Typography>
      <Typography
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
