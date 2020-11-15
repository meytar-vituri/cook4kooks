import React, { Component } from 'react';
import {connect} from 'react-redux';
import Logo from '../../components/logo';
import TimerComp from '../../components/Timer/Timer';
import Navigation from '../../components/navigation';
import JsonData from '../../data/data.json';

const mapStateToProps = (state) =>{
  return{
    timerSteps: state.changeTimer.timerSteps,
    timerInit: state.changeTimer.timerInit,
    recipe: state.changeRecipe.recipe
  } ;
}


class TopArea extends Component {
  state = {
    landingPageData: {},
  }
  getlandingPageData() {
    this.setState({landingPageData : JsonData})
  }

  componentDidMount() {
    this.getlandingPageData();
  }

  render() {
    const { timerSteps, timerInit} = this.props;
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
        <Navigation />
        {renderTimer()}   
      </div>
    )
  }
}

export default connect(mapStateToProps)(TopArea);