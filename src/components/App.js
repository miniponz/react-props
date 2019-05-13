import React from 'react';
import Dog from './Dog';
import Header from './Header';

export default function App() {
  return (
    <>
      <Header />
      <Dog name="Ana Dogg" age={2}  weight="27 lbs" />
    </>
  );
}
