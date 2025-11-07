import React from "react";
import { Routes, Route } from "react-router-dom";
import { Hub } from "./pages/Hub/Hub";
import { Task1ScramblerPage } from "./pages/Task1Scrambler/Task1ScramblerPage";
import { Task2PeselPage } from "./pages/Task2Pesel/Task2PeselPage";
import { Task3UsersPage } from "./pages/Task3Users/Task3UsersPage";

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Hub />} />
      <Route path="/task1-scrambler" element={<Task1ScramblerPage />} />
      <Route path="/task2-pesel-validator" element={<Task2PeselPage />} />
      <Route path="/task3-users-api" element={<Task3UsersPage />} />
    </Routes>
  );
};

export default App;
