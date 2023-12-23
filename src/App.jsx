import React from 'react';
import styles from './App.module.css';
import Navbar from './componets/Navbar/Navbar';

const App = () => {
  return (
    <>
      <div className={styles.App}>
        <Navbar />
      </div>
    </>
  )
}

export default App
