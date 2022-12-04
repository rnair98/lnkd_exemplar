import "./App.css";
import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";



function App() {
  return (
    <div className="App" role="main">
      {/* Header */}
      <Header />
      {/* Sidebar */}
      
      <div className="app__body">
        <Sidebar />

        {/* Feed */}

        {/* Widgets */}
      </div>
    </div>
  );
}

export default App;
