import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AuthForm from './components/AuthForm';
import ExpenseManager from './components/ExpenseManager';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<AuthForm />} />
          <Route path="/expense-manager" element={<ExpenseManager />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
