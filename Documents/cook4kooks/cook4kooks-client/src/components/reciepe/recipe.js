import React, {useState} from 'react';
import Step from './step';
import Ingredient from './ingredient';

const Recipe = ({recipe, timerCreate}) =>{
    const isEmpty = (obj) => {
        for (var key in obj){
            if (obj.hasOwnProperty(key))
                return false;
        }
        return true;
    }
    if (isEmpty(recipe)){
        return(
            <div className="container">
                <h1>go back to recipes and select a recipe</h1>
            </div>
        ) 
    }else{
        return(
            <div className="container"> 
                <button onClick={() =>timerCreate(recipe.steps)} value={recipe.id}>start timer</button>
                <h2>{recipe.name}</h2>
                <h3 style={{textDecorationLine: 'underline'}}>Ingredient</h3>
                {
                recipe.ingredients.map((ing,i) => {
                    return( 
                        <Ingredient
                            name={ing.name}
                            amount = {ing.amount}
                            unit = {ing.units}
                            />
                            );
                })
                }
                <h3 style={{textDecorationLine: 'underline'}}>steps</h3>
                {
                 recipe.steps.map((step,i) => {
                    return( 
                        <Step
                            number={i+1}
                            text = {step.text}
                            time = {step.time}
                            />
                            );
                })
                }
            </div>
        );
    
    }
}

export default Recipe;