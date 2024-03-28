
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import Box from './component/Box';
import { Button, Col, Container, Row } from 'react-bootstrap';

function App() {
  const count = useSelector(state => state.count)
  const id = useSelector(state => state.id)
  const password = useSelector(state => state.password)
  const dispatch = useDispatch()
  const increase = () => {
    dispatch({ type: "INCREMENT", payload: { num: 1 } })
  }
  const increaseF = () => {
    dispatch({ type: "INCREMENT", payload: { num: 5 } })
  }
  const decrease = () => {
    dispatch({ type: "DECREMENT", payload: { num: 1 } })
  }
  const decreaseF = () => {
    dispatch({ type: "DECREMENT", payload: { num: 5 } })
  }
  const login = () => {
    dispatch({ type: "LOGIN", payload: { id: "aaa", password: "111" } })
  }

  return (
    <div>
      <Container>
        <Row className='pt-5'>
          <Col className='d-flex flex-column align-items-center'>
            <h5>{`id:${id ? id : ""}`}</h5>
            <h5>{`password:${password ? password : ""}`}</h5>
            <h1>{count}</h1>
            <Box />
          </Col>
          <Col className='d-flex flex-column'>
            <Button className='mb-1' onClick={increase}>증가</Button>
            <Button className='mb-1' onClick={increaseF}>증가5+</Button>
            <Button className='mb-1' onClick={decrease}>감소</Button>
            <Button className='mb-1' onClick={decreaseF}>감소5-</Button>
            <Button className='mb-1' onClick={login}>login</Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
