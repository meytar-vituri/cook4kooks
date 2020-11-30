import React from 'react';
import styles from './RecipeCard.css';

const RecipeCard = ({name}) =>{
    return (
        <div >
            <img alt='recipe' src={`https://cdn5.vectorstock.com/i/1000x1000/43/74/cooking-cuisine-logo-cute-girl-in-chef-hat-vector-24934374.jpg`} />
            <h3> {name} </h3>
        </div>
    );
}

export default RecipeCard;