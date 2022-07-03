import React, { useState } from 'react';
import Dropdown from '../../UI/Dropdown/Dropdown';
import './MainPage.css';

const MainPage = (props) => {

    const [afterEachSelect, setAfterEachSelect] = useState([...props.planet]);

    console.log(afterEachSelect);
    return (
        <React.Fragment>
            <h2
                className='main-Header'>
                Select Planet you want to search in.
            </h2>
            {[1, 2, 3, 4].map((i) => (
                <Dropdown
                    key={i}
                    data={props.planet}
                    className='main-drop'
                />
            ))}
        </React.Fragment>
    )
}

export default MainPage;