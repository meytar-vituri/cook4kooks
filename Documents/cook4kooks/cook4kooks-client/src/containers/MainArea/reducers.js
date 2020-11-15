import {CHANGE_TIMER_STEPS,
    CHANGE_RECIPE,
    REQUEST_RECIPESLIST_SUCCESS, REQUEST_RECIPESLIST_PENDING, REQUEST_RECIPESLIST_FAILED,
    REQUEST_RECIPE_BY_ID_SUCCESS, REQUEST_RECIPE_BY_ID_PENDING, REQUEST_RECIPE_BY_ID_FAILED
    } from './constants';

const initialStateTimer = {
    timerSteps: [],
    timerInit: false
}

export const changeTimer = (state = initialStateTimer, action ={}) =>{
    switch (action.type){
        case CHANGE_TIMER_STEPS:
            return Object.assign({}, state, {timerSteps: action.payload, timerInit:true});
        default:
            return state;
    }    
}

const initialStateRecipe = {
    isPending: false,
    recipe: {},
    error: ''
}

export const changeRecipe = (state = initialStateRecipe, action ={}) =>{
    switch (action.type){
        case REQUEST_RECIPE_BY_ID_PENDING:
            return Object.assign({}, state, {isPending: true});
        case REQUEST_RECIPE_BY_ID_SUCCESS:
            return Object.assign({}, state, {recipe:action.payload, isPending:false})
        case REQUEST_RECIPE_BY_ID_FAILED:
            return Object.assign({}, state, {error:action.payload, isPending:false})
        default:
            return state;
    }    
}

const initialStateRecipesList = {
    isPending: false,
    recipesList: [],
    error: ''
}

export const changeRecipesList = (state = initialStateRecipesList, action ={}) =>{
    switch (action.type){
        case REQUEST_RECIPESLIST_PENDING:
            return Object.assign({}, state, {isPending: true});
        case REQUEST_RECIPESLIST_SUCCESS:
            return Object.assign({}, state, {recipesList:action.payload.data, isPending:false})
        case REQUEST_RECIPESLIST_FAILED:
            return Object.assign({}, state, {error:action.payload, isPending:false})
        default:
            return state;
    }    
}