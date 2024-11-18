import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Route, Routes } from "react-router-dom";
import HomePage from './Pages/HomePage';

const theme = createTheme({
  // ...custom theme settings if any...
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;