import React from 'react';

const Items = (props) => {
    return (
        <div className="task-lists">
            <ul>
                { Object.keys(props.notes).map((key)=>(
                    <li key={key}>{props.notes[key]} <button onClick={() => props.delteItem(key)}>X</button></li>
                )) }
            </ul>
        </div>
    )
}

export default Items;
