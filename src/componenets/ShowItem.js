import React from 'react'



function ShowItem(props) {

    //this props.listItem.length is mean if length > 0
    const myitem = props.listItem.length ? (props.listItem.map((item) => {
        return (
            <div key={item.id}>
                <span className='name' >{item.name}</span>
                <span className='age'>{item.age}</span>
                <span className='action icon' onClick={() => props.deleteItem(item.id)}>&times;</span>
            </div>
        );
    })) : (<p>There is no item to show</p>)

    return (
        <div className='ListItems'>
            <div>
                <span className='name title'>Name</span>
                <span className='age title'>Age</span>
                <span className=' action title'>Action</span>
            </div>
            {myitem}
        </div>

    );
}

export default ShowItem
