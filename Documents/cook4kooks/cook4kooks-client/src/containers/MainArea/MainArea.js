import React, { Component } from 'react';
import {connect} from 'react-redux';
import {setRecipe, setTimerSteps, requestRecipesList, requestRecipesByTag} from './actions';
import {Switch, Route} from 'react-router-dom';
import About from '../../components/About';
import AboutMe from '../../components/AboutMe';
import Tips from '../../components/Tips';
import RecipesList from '../../components/RecipesList/RecipeList';
import Recipe from '../../components/reciepe/recipe';




const mapStateToProps = (state) =>{
  return{
    timerSteps: state.changeTimer.timerSteps,
    recipe: state.changeRecipe.recipe,
    errorRecipe: state.changeRecipe.error,
    isPendingRecipesList: state.changeRecipesList.isPending,
    errorRecipesList: state.changeRecipesList.error,
    recipesList : state.changeRecipesList.recipesList
  } ;
}
const mapDispatchToProps = (dispatch) =>{
  return{
    onTimerCreate: (timerSteps) => dispatch(setTimerSteps(timerSteps)),
    onRecipeChange: (recipe) => dispatch(setRecipe(recipe)),
    onRecipesListRequest: () => dispatch(requestRecipesList()),
    onRecipeListByTagRequest: (tag) => dispatch(requestRecipesByTag(tag))
  }
}

class MainArea extends Component {

  render() {
    const {onRecipeChange, onTimerCreate, recipe, onRecipesListRequest, recipesList, onRecipeListByTagRequest} = this.props;
    console.log(recipesList)
    return (
      <div>
          <Switch>
            <Route component = {About} path = '/' exact/>
            <Route component = {AboutMe} path = '/AboutMe'/>
            <Route component = {Tips} path = '/Tips'/>
            <Route exact path={`/Recipes/:recipeId`}>
                    <Recipe recipe={recipe} timerCreate={onTimerCreate} />
                </Route>
            <Route path="/Recipes" render={(props) => <RecipesList getRecipesList ={onRecipesListRequest} changeRecipe={onRecipeChange} recipesList={recipesList}/>} /> 
          </Switch>
          
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainArea);