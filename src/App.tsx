import { Route, Routes } from "react-router-dom";
import { Habits, Home, Login, TaskBoard } from "./components/screens";

function App() {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/task-board" element={<TaskBoard />} />
        <Route path="/habits" element={<Habits />} />
        <Route path="/login" element={<Login />} />
      </Routes>
  );
}

export default App;
