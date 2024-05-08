// src/App.js

import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/home/HomePage';
import SignInPage from './components/login/SignInPage';
import SignUpPage from './components/signup/SignUpPage';
import Dashboard from './components/Dashboard/Dashboard';
import { AuthProvider } from './components/AuthContext';
import CreateNoteForm from './components/CreateNoteForm/CreateNoteForm';
import UpdateNoteForm from './components/UpdateNoteForm/UpdateNoteForm';
import NotesList from './components/NotesList/NotesList';
import AllNotesList from './components/AllNotesList/AllNotesList';
import NavigationBar from './components/NavigationBar/NavigationBar';


function App() {
  const [user,setUser] = useState(null);

  return (
    <AuthProvider>
    <Router>
      <div>
        <NavigationBar/>
      <Routes>
        <Route path="/" element={<HomePage />} /> 
        <Route path="/signin" element={<SignInPage setUser={setUser}/>} />
        <Route path="/signup" element={<SignUpPage/>} />
        <Route path="/user" element={<Dashboard user={user}/>} />
        <Route path="/user/create" element={<CreateNoteForm/>} />
        <Route path='/note/update/:id' element={<UpdateNoteForm/>} />
        <Route path="/user/notes" element={<NotesList/>} />
        <Route path="/notes" element={<AllNotesList/>} />

       </Routes>
       </div>
    </Router>
    </AuthProvider>
    
  );
}

export default App;
