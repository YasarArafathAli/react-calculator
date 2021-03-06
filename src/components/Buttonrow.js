import React from 'react';
import Button from "./Button";

const Buttonrow = props => {
    return (
        <div style = {{display : "flex"}}>
            <Button type = "number" btn = {props.btnArr[0]} />
            <Button type = "number" btn = {props.btnArr[1]} />
            <Button type = "number" btn = {props.btnArr[2]} />
            <Button type = "operator" btn = {props.btnArr[3]} />
        </div>
    );
}

export default Buttonrow;
