import React, {useState} from 'react';
import './App.css';
import Navigation from './Navigation.js';
import Footer from './Footer.js';
import Header from './Header.js';
import Section from './Section.js';

function App() {

  const [count, setCount] = useState(0); //initializing state to update the cart count

  const getCount = (value) => {
    // console.log(value);
    setCount(prevCount => prevCount + value);
  }
  
  return (
    <div >
      <Navigation count={count}/>  
      <Header />
      <Section getCount={getCount}/>
      <Footer />
    </div>
  );
}

export default App;
