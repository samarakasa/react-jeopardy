import React from 'react';


const unselectedStyle = {color: 'rgba(0,0,.5)'};
const selectedStyle = {border: '5px inset black'};




const Clue = props => (

<div style={props.selected ? selectedStyle : unselectedStyle}
            onClick ={props.handleClueSelection}>

    <p>Question: {props.question} </p>
    <p>value: $ {props.value}</p>
    <p>CategoryName: {props.categoryName}</p>
</div>

);

export default Clue;