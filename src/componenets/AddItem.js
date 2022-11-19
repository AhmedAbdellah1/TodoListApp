import React, { useState } from 'react'

function AddItem(props) {

    const [item, setItem] = useState({ name: "", age: "" });

    const changeHandler = e => {
        setItem({ ...item, [e.target.name]: e.target.value });
    }

    const submitHandler = e => {
        e.preventDefault();
        if (e.target.name.value == '') {
            return false;
        } else {
            props.addIMytem(item);
        }
        //clear all input values in the form bout this code value setItem({ name: "", age: "" })
        setItem({ name: "", age: "" })
        //and shoud be to clear input filed bout this code value = { item.name }

    }
    return (
        <>
            <form onSubmit={submitHandler}>
                <input type="text" placeholder='Enter name...' name='name' onChange={changeHandler} value={item.name} />
                <input type="number" placeholder='Enter number...' name='age' onChange={changeHandler} value={item.age} />
                <input type="submit" value='Add' />
            </form>
        </>
    )
}

export default AddItem
