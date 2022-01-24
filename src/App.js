import React from 'react';
import './style.css';
import List from './List.js';
import Input from './Input.js';

let data = [
  {
    id: 1,
    name: 'John',
  },
  {
    id: 2,
    name: 'Will',
  },
];

export default function App() {
  const [searchTerm, setSearchTerm] = React.useState('');

  const [datalist, setData] = React.useState(data);

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleClick = (e) => {
    const hi = data.reduce((acc, e) => {
      if (acc.id < e.id) acc = e;
      return acc;
    }, data[0]);
    const obj = { id: hi.id + 1, name: searchTerm };
    data = [...data, obj];
    setData(data);

    // this isn't reseting searchTerm
    setSearchTerm('');
  };

  const handleDelete = (x) => {
    data = data.filter((i) => i.id != x.target.id);

    setData(data);
  };

  const handleEdit = (newValue, id) => {
    console.log(newValue, id)
    const xa = data.map((e) => {
      if (e.id == id) {
        console.log('hi')
        e.name = newValue;
      }
      return e;
    });
    setData(xa);
  }

 





  return (
    <div>
      <Input search={handleChange} click={handleClick} />
      <hr></hr>
      {/*  */}
      {data.map((item) => (
        <List

          edit={handleEdit}
          delete={handleDelete}
          key={item.id}
          dataItem={item}
          delete={handleDelete}
        />
      ))}
    </div>
  );
}
