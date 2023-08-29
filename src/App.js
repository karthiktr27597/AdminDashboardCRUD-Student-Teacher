import { Routes, Route } from "react-router-dom";
import './App.css';
import Dashboard from './Components/Dashboard';
import Home from './Components/Home';
import StudentPage from "./Components/StudentPage";
import TeacherPage from "./Components/TeacherPage";
import EditData from "./Components/EditData";
import ContextProvider from "./Components/Data/ContextProvider";
import NoPage from "./Components/NoPage";



function App() {
  return (
    <div className="App">
      <ContextProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/students" element={<StudentPage />} />
          <Route path="/teachers" element={<TeacherPage />} />
          <Route path="/edit/:id" element={<EditData />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </ContextProvider>
    </div>
  );
}

export default App;
