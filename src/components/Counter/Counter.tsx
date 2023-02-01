import { Component, createSignal, } from "solid-js";

import styles from "./Counter.module.css";


const Counter: Component = () => {
    const [count, setCount] = createSignal(0);

    const increment = () => setCount(c => c + 1);
    const decrement = () => setCount(c => c - 1);

    return (
        <>
            <p>Count: {count()}</p>
            <div class={styles.row}>
                <button onClick={decrement} class={styles.button}>-1</button>
                <button onClick={increment} class={styles.button}>+1</button>
            </div>
        </>
    )
};

export default Counter;