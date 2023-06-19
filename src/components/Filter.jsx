import React from "react";
import "../styles/filterMenu.css";
const List = () => {
  const options = [
    "All",
    "Technology",
    "Education",
    "Lifestyle",
    "Healthcare",
    "Sport",
    "Food",
  ];
  const items = options.map((x) => {
    return (
      <div className="flex-item px-3 py-2">
        <button>{x}</button>
      </div>
    );
  });
  return (
    <div className=" filters d-flex flex-row justify-content-start p-2">
      {items}
    </div>
  );
};

export default List;
