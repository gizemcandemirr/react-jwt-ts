import './App.css';
import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom"
import Auth from './pages/Auth';
import Dashboard from './pages/Dashboard';
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      
       <BrowserRouter>
       <ToastContainer/>
         <Routes>
            <Route path="/" element={<Navigate to="/auth" replace />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="/dashboard" element={<Dashboard />} />
         </Routes>
       </BrowserRouter>

    </div>
  );
}

export default App;
