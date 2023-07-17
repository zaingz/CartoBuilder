import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import React, { FC } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

// const darkTheme = createTheme({
//   palette: {
//     mode: 'dark',
//     primary: {
//       main: '#ffb74d',
//     },
//     secondary: {
//       main: '#ffd54f',
//     },
//     background: {
//       default: '#1c252b',
//       paper: '#263238',
//     },
//   },
// });

const darkTheme = createTheme({
  palette: {
    mode: 'light',
   
  },
});


interface ThemedStylesProps {
  children: React.ReactNode;
}

const ThemedStyle: FC<ThemedStylesProps> = ({ children }) => {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
        {children}
    </ThemeProvider>
  );
}

export default ThemedStyle