import "./App.css";
import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Feed from "./Feed";

function App() {
  return (
    <div className="App" role="main">
      {/* Header */}
      <Header />
      {/* Sidebar */}
      
      <div className="app__body">
        <Sidebar />

        {/* Feed */}
        <Feed />

        {/* Widgets */}
      </div>
    </div>
  );
}

export default App;
