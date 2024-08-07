import React from 'react';
import { TiDelete} from 'react-icons/ti';

//props is used to render the name of the expense and the cost
//TiDelete is used to display a delete icon from the react-icons package
const ExpenseItem = (props) => {
    return(
        <li className='list-group-item d-flex justify-content-between align-items-center'>
            {props.name} 
            <div>
                <span className='badge badge-primary badge-pill mr-3'>
                    R{props.cost}
                </span>
            <TiDelete size='1.5em'></TiDelete> 
            </div>

        </li>
    );
};

export default ExpenseItem;