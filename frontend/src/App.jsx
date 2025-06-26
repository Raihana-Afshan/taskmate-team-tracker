// src/App.jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard"; 
import CreateTask from "./pages/CreateTask";


function App() {
  return (
    <BrowserRouter>
      <Routes>
                <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/create-task" element={<CreateTask />} />



        {/* You can add more routes later */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
