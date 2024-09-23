import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Home';
import Members from "./pages/Members"
import AppData from './pages/AppData';
import Condition from './pages/Condition';
import OrderBar from './pages/OrderBar';
import Settings from './pages/Settings';


function App() {
  return (
    <div className="App">
       <BrowserRouter>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="Members" element={<Members/>} />
          <Route path="Appdata" element={<AppData />} />
          <Route path="Condition" element={<Condition />} />
          <Route path="OrderBar" element={<OrderBar />} />
          <Route path="Settings" element={<Settings />} />
      </Routes>
    </BrowserRouter>
      
    </div>
  );
}

export default App;
