import { createSignal } from "solid-js";

export default function Timer() {
    const [count, setCount] = createSignal(0);

    setInterval(() => setCount(count() + 1), 1000);
  
    return <div>Count: {count()}</div>;
}