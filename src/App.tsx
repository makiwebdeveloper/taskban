import { Route, Routes } from "react-router-dom";
import { Habits, Home, TaskBoard } from "./components/screens";
import Layout from "./components/layout/Layout";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/task-board" element={<TaskBoard />} />
        <Route path="/habits" element={<Habits />} />
      </Routes>
    </Layout>
  );
}

export default App;
