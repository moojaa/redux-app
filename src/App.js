
import { useDispatch,useSelector } from 'react-redux';
import './App.css';
import Box from './component/Box';

function App() {
  const count = useSelector(state=>state.count)
  const id = useSelector(state=>state.id)
  const password = useSelector(state=>state.password)
  const dispatch = useDispatch()
  const increase = ()=>{
    dispatch({type:"INCREMENT",payload:{num:1}})
  }
  const increaseF = ()=>{
    dispatch({type:"INCREMENT",payload:{num:5}})
  }
  const decrease=()=>{
    dispatch({type:"DECREMENT",payload:{num:1}})
  }
  const decreaseF=()=>{
    dispatch({type:"DECREMENT",payload:{num:5}})
  }
  const login = ()=>{
    dispatch({type:"LOGIN",payload:{id:"aaa",password:"111"}})
  }

  return (
    <div>
      <h1>{id}, {password}</h1>
      <h1>{count}</h1>
      <Box/>
      <button onClick={increase}>증가</button>
      <button onClick={increaseF}>증가5+</button>
      <button onClick={decrease}>감소</button>
      <button onClick={decreaseF}>감소5-</button>
      <button onClick={login}>login</button>
    </div>
  );
}

export default App;
