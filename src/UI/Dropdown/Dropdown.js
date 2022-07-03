import React from 'react';
import './Dropdown.css';

const Dropdown = (props) => {
    console.log(props.data);
    return (
        <select>
            {props.data.map((each) => (
                <option value={each.name}>{each.name}</option>
            ))}
        </select>
    )
}

export default Dropdown;