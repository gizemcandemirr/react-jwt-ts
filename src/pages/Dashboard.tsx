import React from 'react'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useAppDispatch, useAppSelector } from '../app/hooks'
import { logout, selectAuth } from '../features/authSlice'

const Dashboard = () => {
  const {name} = useAppSelector(selectAuth);
  const navigate = useNavigate();
  const dispatch= useAppDispatch();
  const handleLogout= ()=>{
    dispatch(logout());
    toast.success("User Logout Succesfully")
    navigate("/auth")
  }
  return (
    <div>
      <h1> Welcome: {name}</h1>
      <button onClick={()=> handleLogout()}>Logout</button>
    </div>
  )
}

export default Dashboard