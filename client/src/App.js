import React from 'react';
import "materialize-css";
import 'materialize-css/dist/css/materialize.min.css';
import './App.scss';
import Form from "./components/form";
import List from "./components/list";

function App() {
  return (
    <div className="app">
      <Form></Form>
      <List></List>
    </div>
  );
}

export default App;
