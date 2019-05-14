import React from 'react';
import Button from './ColorPicker';
import Header from './Header';

export default function App() {
  return (
    <>
      <Header />
      <Button title="red" />
      <Button title="orange" />
      <Button title="yellow" />
      <Button title="green" />
      <Button title="blue" />
      <Button title="purple" />
    </>
  );
}
