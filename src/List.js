import React from 'react';
import './style.css';
import { useSelector, useDispatch } from 'react-redux';
import { deleteItem, addItem, editItem } from './features/sampleSlice';

const style = {
  display: 'flex',
};

const List = (props) => {
  const { dataItem } = props;
  const dispatch = useDispatch();
  const [editState, changeEditState] = React.useState(false);

  const handleClick = (e) => {
    console.log(e.target.id);
    if (e.target.tagName !== 'INPUT') {
      e.target.id === 'delete'
        ? dispatch(deleteItem(dataItem.id))
        : changeEditState(!editState);
    }
  };

  const handleChange = (e) => {
    if (e.charCode === 13) {
      const obj = {
        id: dataItem.id,
        name: e.target.value,
      };
      dispatch(editItem(obj));
      changeEditState(!editState);
    }
  };

  return (
    <div style={style} onClick={handleClick}>
      {editState ? (
        <input onKeyPress={handleChange} defaultValue={dataItem.name} />
      ) : (
        <div>{dataItem.name}</div>
      )}
      <button id="delete">x</button>
      <button id="edit">e</button>
    </div>
  );
};

export default List;
