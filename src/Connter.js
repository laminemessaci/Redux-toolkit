import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  decrement,
  increment,
  reset,
  incrementByAmount,
  decrementByAmount,
} from './features/counter/counterSlice.js';

function Connter() {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  const [incrementAmount, setIncrementAmount] = useState(0);
  const addValue = Number(incrementAmount) || 0;

  const resetAll = () => {
    setIncrementAmount(0);
    dispatch(reset());
  };

  return (
    <section>
      <p>{count} </p>
      <div style={{ margin: 20 }}>
        <button
          style={{ margin: 20, backgroundColor: 'green' }}
          onClick={() => dispatch(increment())}
        >
          {' '}
          +{' '}
        </button>
        <button
          style={{ margin: 20, backgroundColor: 'red' }}
          onClick={() => dispatch(decrement())}
        >
          {' '}
          -{' '}
        </button>
      </div>

      <input
        type="text"
        value={incrementAmount}
        onChange={(e) => setIncrementAmount(e.target.value)}
      />
      <div style={{ margin: 20 }}>
        <button onClick={() => dispatch(incrementByAmount(addValue))}>
          Add Amount
        </button>
        <button onClick={() => dispatch(decrementByAmount(addValue))}>
          Reduce Amount
        </button>
      </div>
      <div style={{ margin: 20 }}>
        <button onClick={() => dispatch(reset())}>Reset </button>
      </div>
    </section>
  );
}

export default Connter;
