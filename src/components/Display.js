import React from 'react';

const Display = props => {
    return (
        <div className = "display" style = {{backgroundColor: "#000", color : "#fff"}}>
            {props.value}
        </div>
    );
}

export default Display;
