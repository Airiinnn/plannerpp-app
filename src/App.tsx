import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./containers/Header/Header";
import Navbar from "./containers/Navbar/Navbar";
import Kanban from "./views/Kanban/Kanban";
import Calendar from "./views/Calendar/Calendar";

function App() {
  return (
    <div className="app">
      <Router>
        <Header />
        <Navbar />

        <Routes>
          <Route path="/">
            <Route index Component={Kanban} />
            <Route path="/kanban" Component={Kanban} />
            <Route path="/calendar" Component={Calendar} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
