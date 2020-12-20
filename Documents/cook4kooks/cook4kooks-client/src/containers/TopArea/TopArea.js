import React, { Component } from 'react';
import {connect} from 'react-redux';
import Logo from '../../components/logo';
import TimerComp from '../../components/Timer/Timer';
import Navigation from '../../components/navigation';
import {requestRecipesList, requestRecipesByTag} from '../MainArea/actions';





const mapStateToProps = (state) =>{
  return{
    timerSteps: state.changeTimer.timerSteps,
    timerInit: state.changeTimer.timerInit,
    recipe: state.changeRecipe.recipe,
    isPendingRecipesList: state.changeRecipesList.isPending,
    errorRecipesList: state.changeRecipesList.error,
    recipesList : state.changeRecipesList.recipesList
  } ;
}

const mapDispatchToProps = (dispatch) =>{
  return{
    onRecipesListRequest: () => dispatch(requestRecipesList()),
    onRecipeListByTagRequest: (tag) => dispatch(requestRecipesByTag(tag))
  };
}


class TopArea extends Component {

  render() {
    const { timerSteps, timerInit, onRecipesListRequest, onRecipeListByTagRequest} = this.props;
    const renderTimer = () =>{
      if(timerInit){
        return  <TimerComp timerSteps={timerSteps}/> ;  
      }else{
        return;
      }
    }
    return (
      <div>
        <Logo/>
        <Navigation onRecipesListRequest={onRecipesListRequest} onRecipeListByTagRequest={onRecipeListByTagRequest}/>
        {renderTimer()}   
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TopArea);