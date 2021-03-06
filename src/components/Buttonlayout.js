import React from 'react';
import Buttonrow from "./Buttonrow";

const Buttonlayout = props => {
    return (
        <div>
           <Buttonrow btnArr = {["AC","%","+/-","÷"]} />
           <Buttonrow btnArr = {["1","2","3","+"]} />
           <Buttonrow btnArr = {["4","5","6","-"]} />
           <Buttonrow btnArr = {["7","8","9","*"]} />
           <Buttonrow btnArr = {[".","0","⌫","="]} />

        </div>
    );
}

export default Buttonlayout;