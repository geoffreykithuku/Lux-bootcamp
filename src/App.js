import { useState } from "react";
import CreateList from "./components/CreateList";
import DisplayList from "./components/DisplayList";
import './App.css'


function App() {
  return (
    <div className="App">
      <div className="content">
        <DisplayList />
      </div>
    </div>
  );
}
export default App;
