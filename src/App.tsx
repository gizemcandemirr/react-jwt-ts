import './App.css';
import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom"
import Auth from './pages/Auth';
import Dashboard from './pages/Dashboard';
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useAppDispatch } from './app/hooks';
import { useEffect } from 'react';
import { setUser } from './features/authSlice';
import PrivateRoute from './components/PrivateRoute';


function App() {
  const dispatch =useAppDispatch();
  const user = JSON.parse(localStorage.getItem("user") || "{}");

  useEffect(()=>{
    dispatch(setUser(user));
  },[])

  return (
    <div className="App">
      
       <BrowserRouter>
       <ToastContainer/>
         <Routes>
            <Route path="/" element={<Navigate to="/auth" replace />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="/dashboard" element={<PrivateRoute> <Dashboard/></PrivateRoute>} />
         </Routes>
       </BrowserRouter>

    </div>
  );
}

export default App;
