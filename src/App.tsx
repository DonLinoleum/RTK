import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from './store/store';

import './App.css';
import { useDispatch } from 'react-redux';
import {increment} from './store/reducers/UserSlice'


function App() {
  const count = useSelector((state:RootState)=>state.UserSlice.count)
  const dispatch = useDispatch()
  return (
    <div className="App">
      <h1 style={{fontSize:"100px"}}>Софокл</h1>
      <button onClick={()=>dispatch(increment(50))}>Хуй</button>
      <div>{count}</div>
    </div>
  );
}

export default App;
