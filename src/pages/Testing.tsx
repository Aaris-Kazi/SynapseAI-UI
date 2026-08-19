import { useDispatch, useSelector } from "react-redux"
import type { AppDispatch, RootState } from "../state/Store"
import { asyncCounterSlice, setNegative, setPositive } from "../state/counter/CounterSlice"

const Testing = () => {
  const dispatch = useDispatch<AppDispatch>()
  const selector = useSelector((state: RootState) => state.counter.value)

  return (
    <div>
      <button onClick={() => dispatch(setPositive())}>
        {String(selector)}
      </button>
      <button onClick={() => dispatch(setNegative())}>
        {String(selector)}
      </button>
      <button onClick={() => dispatch(asyncCounterSlice(true))}>
        {String(selector)}
      </button>
    </div>
  )
}

export default Testing