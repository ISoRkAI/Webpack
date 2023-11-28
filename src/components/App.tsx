import  { useState } from 'react'
import './App.scss'

export const App = () => {
    const [count, setCount] = useState<number>(0)

    const increment = () => setCount(e => e + 1)
    
  return (
      <div><h1>{count}</h1><button onClick={increment}>int</button></div>
  )
}