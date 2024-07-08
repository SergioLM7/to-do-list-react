import React, { useState, useRef } from "react";
import { v4 as uuidv4 } from 'uuid';
import Item from './Item';
import firstvalues from './firstvalues'


const List = () => {
   
    const [list, setToDoList] = useState(firstvalues);
    const [values, setValues] = useState({
        task: ''
    });
    const inputRef = useRef("");

    const renderItems = () =>
        list.map((item, i) => (
            <Item
                key={uuidv4()}
                dataTodo={item}
                deleteItem={() => deleteItem(i)}
            />
        ));

    const clearToDoList = () => setToDoList([]);
    const resetItems = () => setToDoList(firstvalues);
    const deleteItem = (pos) => {
        const remainingItems = list.filter((item, index) => index !== pos);
        setToDoList(remainingItems);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        let toDo = e.target.todo.value;
        console.log(toDo)
        const newItem = { task: toDo };
        setToDoList([...list, newItem]); //Actualizar estado con el nuevo item
        inputRef.current.value = "";
    };

    const handleChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    };

    

    return <section>
        <article className="form-article">
         <form onSubmit={handleSubmit} className="form">
            <div>
                <label form="todo"></label>
                <input type="text" ref={inputRef} name="todo" onChange={handleChange}/>
            </div>
            <br/>
            {values.todo ? <button type="submit">ADD</button> : <p>Add a new task to do</p>}
        </form>
        </article>
        <br/>
        <article className="list-article">
        {renderItems()}
        <button onClick={clearToDoList}>Clear</button>
        <button onClick={resetItems}>Reset</button>
        </article>
    </section>
};

export default List;
