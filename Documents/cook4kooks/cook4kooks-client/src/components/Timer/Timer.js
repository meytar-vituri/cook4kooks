import React from "react";
import Timer from 'react-compound-timer';
import styles from './Timer.css';

class TimerComp extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      timerIndex: -1
    };
    this.onBtnClick = this.onBtnClick.bind(this);
  }
  
  onBtnClick (id){
      this.setState({timerIndex:id});
  }


  render(){
    const {timerSteps} = this.props;
    const {timerIndex} = this.state;
    return (
      <div>

        {
             timerSteps.map((step,i) => {
                return (step.time!==0?
                  <button onClick={() => this.onBtnClick(i)}>step {i+1}</button> : '' );
                      })
                              
        }   
        {
        timerIndex===-1?
          <Timer
            initialTime={0}
            startImmediately={false}
            direction="backward"
            key={timerIndex}
          >
            {({ start, resume, pause, stop, reset, timerState }) => (
                <React.Fragment>
                    <div>
                        <Timer.Hours /> hours
                        <Timer.Minutes /> minutes
                        <Timer.Seconds /> seconds
                    </div>
                    <div>
                        <button onClick={start}>Start</button>
                        <button onClick={pause}>Pause</button>
                        <button onClick={resume}>Resume</button>
                        <button onClick={stop}>Stop</button>
                        <button onClick={reset}>Reset</button>
                    </div>
                </React.Fragment>
            )}
        </Timer>
        :
          <Timer
            initialTime={1000*60*timerSteps[timerIndex].time}
            startImmediately={false}
            direction="backward"
            lastUnit="h"
            key={timerIndex}
            checkpoints={[
              {
                time: 0,
                callback: () => {
                  var audio = new Audio('https://media.geeksforgeeks.org/wp-content/uploads/20190531135120/beep.mp3');  
                  audio.play();
                  window.alert("time's up");
                                   }
              }
            ]}
          >
            {({ start, resume, pause, stop, reset, timerState }) => (
                <React.Fragment>
                    <div className={"timerLine"}> 
                    <div className={"timeUnit"}><Timer.Hours /> hours </div>
                    <div className={"timeUnit"}><Timer.Minutes /> minutes </div>
                    <div className={"timeUnit"}><Timer.Seconds /> seconds </div>
                    </div>
                    <div>
                        <button onClick={start}>Start</button>
                        <button onClick={pause}>Pause</button>
                        <button onClick={resume}>Resume</button>
                        <button onClick={stop}>Stop</button>
                        <button onClick={reset}>Reset</button>
                    </div>
                </React.Fragment>
            )}
          </Timer>
        }
        
      </div>
    ); 
  }
  
}

export default TimerComp;
