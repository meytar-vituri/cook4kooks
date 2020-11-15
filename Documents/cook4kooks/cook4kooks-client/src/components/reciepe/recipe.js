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
        return <h1>go back to recipes and select a recipe</h1>
        // later - load the recipe in this page with request to the server,
        // make it possible dirictly with recipeID in the URL
    }else{
        return(
            <div className="container"> 
                <button onClick={() =>timerCreate(recipe.steps)} value={recipe.id}>start timer</button>
                <h2>Ingredient</h2>
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
                <h2>steps</h2>
                {
                 recipe.steps.map((step,i) => {
                    return( 
                        <Step
                            id={step.id}
                            text = {step.text}
                            time = {step.time}
                            />
                            );
                })
                }
                <h2>steps</h2> 
            </div>
        );
    
    }
}

export default Recipe;