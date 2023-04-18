import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState,AppDispatch } from './store/store';

import './App.css';
import { useDispatch } from 'react-redux';
import UserSlice, {userSlice} from './store/reducers/UserSlice'
import { fetchUsers } from './store/reducers/ActionCreators';


function App() {
  const {users} = useSelector((state:RootState)=>state.UserSlice.users)
  const dispatch:()=>AppDispatch = useDispatch
  useEffect(()=>{
    dispatch(fetchUsers())
  },[])
  return (
    <div className="App">
      <h1 style={{fontSize:"100px"}}>Софокл</h1>
      {JSON.stringify(users,null,2)}
     
    </div>
  );
}

export default App;
