import { useState } from "react"
import styles from "./Counter.module.css"

const Counter = () => {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h1>Counter</h1>
      <span className={styles.counter}>{count}</span>
      <div className={styles.buttons}>
        <button type="button" onClick={() => setCount(count => count-=1)}>Minus</button>
        <button type="button"onClick={() => setCount(count => count+=1)}>Plus</button>
      </div>
    </div>
  )
}

export default Counter
