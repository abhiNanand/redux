import { useSelector, useDispatch } from "react-redux";
import Counter from "./components/Counter";

const App = () => {
  
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Redux Saga Counter</h1>
      <Counter
        value={count}
        onIncrement={() => dispatch({ type: "INCREMENT" })}
        onDecrement={() => dispatch({ type: "DECREMENT" })}
        onIncrementAsync={() => dispatch({ type: "INCREMENT_ASYNC" })}
      />
    </div>
  );
};


export default App;
