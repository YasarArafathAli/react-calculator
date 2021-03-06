import React from 'react';

const Button = props => {
    return (
        <div >
            <button className = {`btn props.type`}>{props.btn}</button>
        </div>
    );
}

export default Button;
