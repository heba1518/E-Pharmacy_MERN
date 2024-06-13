import './App.css';
import Routes from './Routes';
import styles from "./index.css"
import users from '../src/Data/user'
import products from '../src/Data/products'
import {useEffect, useState} from 'react';

function App() {
  const [message, setMessage] = useState("");
  useEffect(() => {
    fetch("http://localhost:4000")
      .then((res) => res.json())
      .then((data) => setMessage(data.message));
  }, []);

  return (

    <>
      <Routes />
    </>
  );
}

export default App;
