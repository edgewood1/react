import React from 'react';
import './style.css';

const style = {
  display: 'flex',
};

const List = (props) => {
  const { dataItem, handleUpdates } = props;
  const [editState, changeEditState] = React.useState(false);

  const handleClick = (e) => {
    if (e.target.tagName !== 'INPUT') {
      e.target.id === 'delete'
        ? handleUpdates('deleteItem', dataItem.id)
        : changeEditState(!editState);
    }
  };

  const handleChange = (e) => {
    if (e.charCode === 13) {
      const obj = {
        id: dataItem.id,
        name: e.target.value,
      };
      handleUpdates('editItem', obj);
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
