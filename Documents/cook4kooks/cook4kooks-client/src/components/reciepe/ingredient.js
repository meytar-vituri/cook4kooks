import React from 'react';

const Ingredient = ({name, amount, unit}) =>{
    return(
    <h4>{`${amount} ${unit} ${name}`}</h4>
    );
}

export default Ingredient