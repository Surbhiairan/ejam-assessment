import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './logo.svg';
import './App.css';

import DeploymentForm from './components/DeploymentForm'
import DeploymentTable from './components/DeploymentTable'


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <DeploymentForm/>
        <DeploymentTable/>
      </header>
    </div>
  );
}

export default App;
