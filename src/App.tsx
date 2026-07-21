import { Route, Routes } from "react-router-dom";
import "./App.css";
import Dashboard from "./pages/DashBoard";
import Login from "./pages/Login";
import Register from "./pages/Register";


function App() {
  return (
    
      <Routes> 
        <Route index element={ <Dashboard /> } />
        <Route path="/login" element={ <Login /> } />
        <Route path="/register" element={ <Register /> } />
      </Routes>
      
  );
}

export default App;
