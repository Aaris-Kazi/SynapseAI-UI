import { Route, Routes } from "react-router-dom";
import "./App.css";
import Dashboard from "./pages/DashBoard";
import Login from "./pages/Login";


function App() {
  return (
    
      <Routes> 
        <Route index element={ <Dashboard /> } />
        <Route path="/login" element={ <Login /> } />
      </Routes>
      
  );
}

export default App;
