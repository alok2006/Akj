import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route, Outlet, Link } from "react-router-dom"
import Layout from './Components/Layout';
import NavItemList from './Constants/NavItemList';
import { createTheme,ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const darkTheme = createTheme({
  palette: {
    mode: "dark"
  }
});


root.render(<ThemeProvider theme={darkTheme} >
    <CssBaseline/>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout/>}>
          {
            NavItemList.map(({url,elem})=><Route path={url} element={elem}/>)
          }
        </Route>
      </Routes>
    </BrowserRouter>
  </ThemeProvider>
);