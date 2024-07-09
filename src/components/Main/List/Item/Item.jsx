import React from "react";

const Item = (
  { dataTodo: {task},
    deleteItem }
) => {
  return <article>
      <label htmlFor={task}>Done</label>
      <input type='checkbox' value={task} name={task} id={task} />
      <div>
        <p>{task}</p>
      </div>
      <button onClick={deleteItem}>Delete</button>
    </article>

};

export default Item;
