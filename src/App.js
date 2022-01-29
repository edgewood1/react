import React from 'react';
import './style.css';
import List from './List.js';
import Input from './Input.js';
import { useSelector } from 'react-redux';

export default function App() {
  const [searchTerm, setSearchTerm] = React.useState('');
  const data = useSelector((state) => state.counter);

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div>
      <Input search={handleChange} />
      <hr></hr>
      {data.map((dataItem) => (
        <List key={dataItem.id} dataItem={dataItem} />
      ))}
    </div>
  );
}
