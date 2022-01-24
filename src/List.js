import React from 'react';
import './style.css';
import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment } from './features/sampleSlice';

const listStyle = {
  display: 'flex',
};

const buttonStyle = {
  transform: 'scale(.5)',
};

const List = (props) => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  dispatch(increment());
  console.log(state.counter.value);
  const { dataItem } = props;
  const [editState, setEditState] = React.useState(false);
  const changeEdit = () => setEditState(!editState);

  // move editItem to App then
  const editItem = (e) => {
    if (e.charCode === 13) {
      const newValue = e.target.value;
      const id = e.target.className;
      // call parent here:
      // const a  = new CustomeEvent('datas', {
      //   name: x
      // })
      // dispatchEvent(a)
      props.edit(newValue, id);
      setEditState(!editState);
    }
  };

  return (
    <div style={listStyle} key={dataItem.id}>
      {/* input */}
      {editState ? (
        <input
          className={dataItem.id}
          onKeyPress={editItem}
          defaultValue={dataItem.name}
        />
      ) : (
        <p>{dataItem.name}</p>
      )}
      {/* delete */}
      <button id={dataItem.id} style={buttonStyle} onClick={props.delete}>
        X
      </button>
      {/* edit */}
      <button onClick={changeEdit} style={buttonStyle}>
        e
      </button>
    </div>
  );
};

export default List;
