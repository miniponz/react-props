import React from 'react';
import Header from './Header';
import Buttons from './Buttons';


const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'purple'];
export default function App() {
  return (
    <>
      <Header />
      <Buttons colors={colors}/>
    </>
  );
}

