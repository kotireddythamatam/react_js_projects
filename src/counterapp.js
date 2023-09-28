import "./styles.css";
import { useState } from "react";

export default function CounterApp() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <h1>Counter {count}</h1>
      <button onClick={() => setCount(count + 1)}>incriment</button>
      <button onClick={() => setCount(count - 1)}>decriment</button>
    </div>
  );
}
