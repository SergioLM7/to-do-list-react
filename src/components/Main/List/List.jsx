import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from 'uuid';
import Item from './Item';
import firstvalues from './firstvalues'
import './List.css'


const List = () => {
   
    const [list, setToDoList] = useState(firstvalues);
    const [values, setValues] = useState({
        task: ''
    });
    const [timer, setTimer] = useState(null);
    const [showMessage, setShowMessage] = useState(false);
    const [validatorMessage, setValidatorMessage] = useState(null);


    const renderItems = () =>
        list.map((item, i, id) => (
            <Item
                key={uuidv4()}
                dataTodo={item}
                deleteItem={() => deleteItem(i)}
                //toggleDone={()=>handleToggle(id)}
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

        if (toDo.length<6) {
            setValidatorMessage('This field must have at least 6 characters.');
            return;
        }

        const newItem = { task: toDo };
        setToDoList([newItem, ...list]); 
        setValues({ task: '' });
        setValidatorMessage('');
        setShowMessage(true);
        setTimeout(() => {
            setShowMessage(false);
        }, 5000);  
    };

    const handleChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })

        if (timer) {
            clearTimeout(timer);
        }
        // Iniciar un nuevo temporizador de 20 segundos
        const newTimer = setTimeout(() => {
            setValues({ task: '' });
        }, 20000);

        setTimer(newTimer);
    };

    useEffect(() => {
        return () => {
            if (timer) {
                clearTimeout(timer);  // Limpiar el temporizador al desmontar el componente
            }
        };
    }, [timer]);

    /*const handleToggle = (id) => {
        let mapped = list.map(task => {
          return task.id == id ? { ...task, complete: !task.complete } : { ...task};
        });
        setToDoList(mapped);
      }*/

    

    return <section>
        <article className="form-article">
         <form onSubmit={handleSubmit} className="form">
            <div>
                <label htmlFor="todo"></label>
                <input type="text" name="task" id="todo" value={values.task} onChange={handleChange}/>
            </div>
            {values.task ? <button type="submit">ADD</button> : <p>Add a new task to do</p>}
            {validatorMessage && <p className='validator-message'>{validatorMessage}</p>}
        </form>
        </article>
        <article className="message-article">
            <div>
                {showMessage && <i>Task added</i>}
            </div>
        </article>
        <article className="list-article">
        {renderItems()}
        <button onClick={clearToDoList}>Clear</button>
        <button onClick={resetItems}>Reset</button>
        </article>
    </section>
};

export default List;
