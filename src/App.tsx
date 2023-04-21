import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState,AppDispatch } from './store/store';

import './App.css';
import { useDispatch } from 'react-redux';
import UserSlice, {actions} from './store/reducers/UserSlice'
import { fetchUsers } from './store/reducers/ActionCreators';
import PostContainer from './components/PostContainer';


function App() {

  const {users,isLoading,error} = useSelector((state:RootState)=>state.UserSlice)
  const dispatch = useDispatch<AppDispatch>()
  useEffect(()=>{
   dispatch(fetchUsers())
  },[])

  return (
    <div className="App">
      <h1 style={{fontSize:"100px"}}>Софокл</h1>
      {isLoading && <h1>Загрузон...</h1>}
      {error && <h1>{error}</h1>}
      {/*JSON.stringify(users,null,2)*/}
      <PostContainer/>
    </div>
  );
}

export default App;
