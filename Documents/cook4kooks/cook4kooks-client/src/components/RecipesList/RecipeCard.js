import React from 'react';
import styles from './RecipeCard.css';

const RecipeCard = ({name, id}) =>{
    return (
        <div className="bg-light-green dib br3 pa3 ma2 grow bw2 shadow5">
            <img alt='robots' src={`https://cdn5.vectorstock.com/i/1000x1000/43/74/cooking-cuisine-logo-cute-girl-in-chef-hat-vector-24934374.jpg`} />
            <h3> {name} </h3>
        </div>
    );
}

export default RecipeCard;