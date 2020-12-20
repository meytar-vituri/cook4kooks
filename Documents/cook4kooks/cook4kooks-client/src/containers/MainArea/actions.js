import {CHANGE_TIMER_STEPS,
    CHANGE_RECIPE,
    REQUEST_RECIPESLIST_SUCCESS, REQUEST_RECIPESLIST_PENDING, REQUEST_RECIPESLIST_FAILED,
    REQUEST_RECIPES_BY_TAG_PENDING, REQUEST_RECIPES_BY_TAG_SUCCESS, REQUEST_RECIPES_BY_TAG_FAILED
    } from './constants';

export const setTimerSteps = (steps) =>{
    return {
        type: CHANGE_TIMER_STEPS,
        payload: steps
    }
}

export const setRecipe = (recipe) => {
    return {
        type: CHANGE_RECIPE,
        payload: recipe
    }
}

export const  requestRecipesList = () => (dispatch) =>{
    dispatch({type: REQUEST_RECIPESLIST_PENDING});
    fetch('http://localhost:3000/Recipes/recipes/') 
        .then(async response => dispatch({type:REQUEST_RECIPESLIST_SUCCESS, payload:await response.json()}))
        .catch(error => {
            console.log(error);
            dispatch({type:REQUEST_RECIPESLIST_FAILED, payload:error});
        })
}

export const requestRecipesByTag = (tag) => (dispatch) =>{
    dispatch({type: REQUEST_RECIPES_BY_TAG_PENDING});
    fetch(`http://localhost:3000/Recipes/recipes/${tag}`)
        .then(response => response.json())
        .then(data => dispatch({type:REQUEST_RECIPES_BY_TAG_SUCCESS, payload:data}))
        .catch(error => dispatch({type:REQUEST_RECIPES_BY_TAG_FAILED, payload:error}))
}