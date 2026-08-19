import { Route, Routes } from "react-router-dom";
import "./App.css";
import Dashboard from "./pages/DashBoard";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Chats from "./pages/Chats";
import Logout from "./pages/Logout";
import ShowConfig from "./pages/ShowConfig";
import Testing from "./pages/Testing";


function App() {
  return (
    
      <Routes> 
        <Route index element={ <Dashboard /> } />
        <Route path="/showconfig" element={ <ShowConfig /> } />
        <Route path="/login" element={ <Login /> } />
        <Route path="/logout" element={ <Logout /> } />
        <Route path="/register" element={ <Register /> } />
        <Route path="/chat" element={ <Chats /> } />
        <Route path="/testing" element={ <Testing /> } />
      </Routes>
      
  );
}

export default App;
