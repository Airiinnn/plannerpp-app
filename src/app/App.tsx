import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "../features/ui/header/Header";
import Navbar from "../features/ui/navbar/Navbar";
import Kanban from "../features/kanban/Kanban";
import Calendar from "../features/calendar/Calendar";

import { useAppSelector } from "./hooks";
import Modal from "../features/ui/modal/Modal";

function App() {
  const isModalShown = useAppSelector((state) => state.modal.isShown);

  return (
    <div className="app">
      <Router>
        <Header />
        <Navbar />

        {isModalShown && <Modal />}

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
