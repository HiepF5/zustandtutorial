import { useCallback, useEffect, useState } from 'react'
import './App.css'
import useStore from './zustand/store'

function App() {
  const countStore = useStore((state) => state.count)
  const increment = useStore((state) => state.increment)
  const decrement = useStore((state) => state.decrement)
  const fetch = useStore((state) => state.fetch)
  const data = useStore((state) => state.data)
  const [inputCount, setInputCount] = useState(1)

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users/1')
  }, [])
  console.log(data)

  const handleChangeCount = useCallback((e) => {
    setInputCount(() => parseInt(e.target.value))
  }, [])
  console.log(inputCount)
  const handleIncrease = useCallback(() => {
    increment(inputCount)
  }, [inputCount])
  const handleDecrease = useCallback(() => {
    decrement(inputCount)
  }, [inputCount])

  return (
    <>
      <h1>Counter</h1>
      <p>{countStore}</p>
      <input type='number' value={inputCount} onChange={handleChangeCount} />
      <button onClick={handleIncrease}>Increase</button>
      <button onClick={handleDecrease}>Decrease</button>
    </>
  )
}

export default App
