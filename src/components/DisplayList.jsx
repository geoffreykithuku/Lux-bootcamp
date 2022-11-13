import React from "react";
import { useReducer } from "react";

const initialState = {
  title: "This is the first task",
};

function reducer(state, action) {
  switch (action.type) {
    case "ADD":
      return {};
  }
}

function DisplayList({ list, handleDelete }) {
  console.log(list);

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <div className="displayWrapper">
        {list.map((item) => {
          let { title, id } = item;
          return (
            <div className="taskWrapper">
              <input type="checkbox" />
              <span>{title}</span>
              <span onClick={() => handleDelete(id)}>delete</span>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default DisplayList;
