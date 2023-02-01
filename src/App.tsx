import type { Component } from 'solid-js';

import logo from "./assets/logo.svg";
import styles from './App.module.css';
import Counter from './components/Counter/Counter';

const App: Component = () => {
  return (
    <div class={styles.App}>
      <header class={styles.header}>
        <img src={logo} alt="logo" class={styles.logo} />
        <h1>Hello Solid!</h1>
        <Counter></Counter>
      </header>
    </div>
  );
};

export default App;
