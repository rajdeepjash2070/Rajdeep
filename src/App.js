import logo from './logo.svg';
import './App.css';
import {useState} from "react"
import Test from './components/Test';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Login from './components/Login';
import Nasa1 from './components/Nasa1';
import Nasaaestor from './components/Nasaaestor';
import Home from './components/Home';
import Dashboard from './components/Dashboard';
import Hooks from './components/Hooks';
import Crud from './components/Crud';
import Addbook from './components/Addbook';
import Updatebook from './components/Updatebook';




function App() {
  
  return (
    <Router>
      

      <Routes>
        <Route path="/test" element={<Test />} />
        <Route path="/login" element={<Login />} />
        <Route path="/nasa" element={<Nasa1 />}/>
        <Route path='/astor' element={<Nasaaestor/>}/>
        <Route path='/' element={<Home/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path="/hooks" element={<Hooks/>}/>
        <Route path='/crud' element={<Crud/>}/>
        <Route path='/addbook' element={<Addbook/>}/>
        <Route path='/updatebook/:id' element={<Updatebook/>}/>
      </Routes>
    </Router>
  );
}

export default App;
