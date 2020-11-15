import React from 'react';

const Ingredient = ({name, amount, unit}) =>{
    return(
    <h3>{`${amount} ${unit} ${name}`}</h3>
    );
}

export default Ingredient