import React from 'react';
import './style.css';
import List from './List.js';
import Input from './Input.js';
import { useSelector } from 'react-redux';
import { deleteItem, addItem, editItem } from './features/sampleSlice';
import { useSelector, useDispatch } from 'react-redux';


export default function App() {
  const [searchTerm, setSearchTerm] = React.useState('');
  const data = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const storeMap = {
    editItem, addItem, deleteItem
  }

  const handleUpdates = (func, param) => {
    dispatch(storeMap[func](param))
  }

  return (
    <div>
      <Input 
        handleUpdates = {handleUpdates} 
        search={handleChange}
      />
      <hr></hr>
      {data.map((dataItem) => (
        <List 
          key={dataItem.id} 
          dataItem={dataItem}
          handleUpdates = {handleUpdates}
        />
      ))}
    </div>
  );
}
