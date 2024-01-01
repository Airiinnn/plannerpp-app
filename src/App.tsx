import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Kanban from "./pages/Kanban";
import Calendar from "./pages/Calendar";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/">
          <Route index Component={Kanban} />
          <Route path="/kanban" Component={Kanban} />
          <Route path="/calendar" Component={Calendar} />
        </Route>
      </Routes>

      <Link to="/calendar">
        <p>To calendar</p>
      </Link>

      <Link to="/kanban">
        <p>To kanban</p>
      </Link>
    </Router>
  );
}

export default App;
