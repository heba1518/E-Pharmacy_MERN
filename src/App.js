import './App.css';
import Routes from './Routes';
import styles from "./index.css"
import users from '../src/Data/user'
import products from '../src/Data/products'
import {useEffect} from 'react';
function App() {
  // useEffect(() => {
  //   localStorage.setItem('users', JSON.stringify(users));
  //   localStorage.setItem('products', JSON.stringify(products));
  //   localStorage.setItem('profile', JSON.stringify(false));
  // }, []);
  localStorage.setItem('profile', JSON.stringify(false));
  return (

    <>
      <Routes />
    </>
  );
}

export default App;
