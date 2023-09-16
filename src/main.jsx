import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import ReactDOM from 'react-dom/client';
import App from './App';
import Login from "./components/Login";
import './index.css';
import Student from './components/Student';
// import Mentor from '../src/components/Mentor/Mentor'
import Mentor from './components/Mentor/Mentor';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/login' element={<Login />} />
        <Route path='/student' element={<Student />} />
        <Route path='/mentor' element={<Mentor />} />
        {/* <Route path='/mentor' element={<Mentor />} /> */}
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
