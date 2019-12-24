import React, { useState } from "react";
import FlipMove from "react-flip-move";
import { connect } from "react-redux";
import { changecolor } from "../actions";
import { deleteitem } from "../actions";
import { editItem, toggleEdit } from "../actions";
import "./TodoItems.css";

const mapStateToProps = state => {
  return { items: state.items };
};

const mapDispatchToProps = dispatch => {
  return {
    changecolor: payload => dispatch(changecolor(payload)),
    deleteitem: payload => dispatch(deleteitem(payload)),
    editItem: payload => dispatch(editItem(payload)),
    toggleEdit: key => dispatch(toggleEdit(key))
  };
};

const ConnectedTodoItems = ({
  items,
  changecolor,
  deleteitem,
  editItem,
  toggleEdit
}) => {
  const [changedTodo, setChangedTodo] = useState("");

  const editTodo = (el) => {
    if (el.edit) {
      editItem({ key: el.key, newText: changedTodo });
      toggleEdit(el.key);
    } else {
      toggleEdit(el.key);
    }
  };

  return (
    <ul className="theList">
      <FlipMove duration={250} easing="ease-out">
        {items.map(el => (
          <div className="addetitems">
            <input
              type="text"
              className={el.button ? "couleurrouge" : "couleurancienne"}
              onClick={() => changecolor(el.key)}
              key={el.key}
              placeholder={el.text}
              onChange={e => setChangedTodo(e.target.value)}
              readOnly={!el.edit}
            />

            <button className="btn" onClick={()=>editTodo(el)}>
              {el.edit ? "Save" : "Edit"}
            </button>
            <button className="btn" onClick={() => deleteitem(el.key)}>
              Delete
            </button>
          </div>
        ))}
      </FlipMove>
    </ul>
  );
};

const TodoItems = connect(
  mapStateToProps,
  mapDispatchToProps
)(ConnectedTodoItems);

export default TodoItems;
