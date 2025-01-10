import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(1);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  return (
    <div className="flex items-center justify-center border-2 border-blue-500 rounded-2xl space-x-2 px-2">
      <button
        onClick={decrement}
        className="text-blue-500 text-lg font-bold flex-1"
      >
        -
      </button>
      <span className="text-blue-500 text-lg font-bold">{count}</span>
      <button
        onClick={increment}
        className="text-blue-500 text-lg font-bold flex-1"
      >
        +
      </button>
    </div>
  );
}
