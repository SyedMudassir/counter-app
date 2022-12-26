import { useSelector, useDispatch } from "react-redux";
import "./App.css";
import { decrement, increment, incrementBy, decrementBy } from "./counterSlice";

function App() {
  const count = useSelector((state) => state.counter.counterValue);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <span className="countValue">{count}</span>
      <button
        className="btn"
        onClick={() => {
          dispatch(increment());
        }}
      >
        Increment
      </button>
      <button
        className="btn"
        onClick={() => {
          dispatch(decrement());
        }}
      >
        Decrement
      </button>
      <button
        className="btn"
        onClick={() => {
          dispatch(incrementBy(5));
        }}
      >
        Increment By 5
      </button>
      <button
        className="btn"
        onClick={() => {
          dispatch(decrementBy(5));
        }}
      >
        Deccrement By 5
      </button>
    </div>
  );
}

export default App;
