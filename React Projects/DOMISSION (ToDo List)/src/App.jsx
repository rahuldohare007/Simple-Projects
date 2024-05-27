// import React from 'react'
import Navbar from "./components/Navbar";
import TodoContext from "./context/TodoContext";
import TodoMain from "./components/TodoMain";

function App() {
  return (
    <div>
      <TodoContext>
        <Navbar />
        <TodoMain />

      </TodoContext>
    </div>
  );
}

export default App;
