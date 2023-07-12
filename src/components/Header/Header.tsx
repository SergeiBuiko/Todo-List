import React from 'react';
import Typography from '@mui/material/Typography';

export const Header = () => {
  return (
    <Typography sx={{ fontSize: 40 }} variant="h1" component="h1" gutterBottom>
      Todo list
    </Typography>
  );
};
