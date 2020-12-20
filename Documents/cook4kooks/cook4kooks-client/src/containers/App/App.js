import React, { Component } from 'react'
import TopArea from '../TopArea/TopArea';
import MainArea from '../MainArea/MainArea';
import Scroll from '../../components/Scroll';



class App extends Component {

  render() {
    return (
      <div>
          <TopArea/>
          <Scroll>
            <MainArea />
          </Scroll>        
      </div>
    )
  }
}

export default App;
