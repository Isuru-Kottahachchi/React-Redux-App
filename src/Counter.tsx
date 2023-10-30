
//Counter Reducer

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './counterSlice';
import { RootState } from './store'; // Import the RootState type

const Counter: React.FC = () => {


  //exact data from the redux store
  const counter = useSelector((state: RootState) => state.counter.value); // Use RootState type here

  const dispatch = useDispatch();

  return (

    <div>
      <h2>Counter: {counter}</h2>
      <button onClick={() => dispatch(increment())}  style={{ cursor: 'pointer' }}>Increment + </button>
      <button onClick={() => dispatch(decrement())}  style={{ cursor: 'pointer' }}>Decrement -</button>
    </div>
  );
};

export default Counter;
