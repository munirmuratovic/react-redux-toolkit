import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../state/store";
import {
  increment,
  decrement,
  incrementByAmount,
} from "../state/counter/counterSlice";
import { incrementAsync } from "../state/counter/counterThunk";

export default function Counter() {
  const count = useSelector((state: RootState) => state.counter.value);

  const dispatch = useDispatch<AppDispatch>();

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => dispatch(incrementAsync(30))}>+30 async</button>
      <button onClick={() => dispatch(decrement())}>-1</button>
      <button onClick={() => dispatch(increment())}>+1</button>
      <button onClick={() => dispatch(incrementByAmount(10))}>+10</button>
    </div>
  );
}
