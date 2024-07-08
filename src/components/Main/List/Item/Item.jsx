import React from "react";

const Item = (
  { dataTodo: {task},
    deleteItem }
) => {
  return <article>
      <input type='checkbox' value={task} name={task} />{task}
      <button onClick={deleteItem}>Delete</button>
    </article>

};

export default Item;
