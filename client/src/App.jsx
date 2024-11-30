// import React from 'react';
// import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Route, Routes } from "react-router-dom";
import HomePage from './Pages/HomePage';
import Signup from './Pages/Signup';
import Login from './Pages/Login';

// const theme = createTheme({
//   // ...custom theme settings if any...
// });

function App() {
  return (
    <>
      <Routes>
      <Route path="/signup" element={<Signup />}></Route>
      <Route path="/login" element={<Login />}/>
        <Route path="/" element={<HomePage />} />

      </Routes>
    </>
  );
}
export default App;