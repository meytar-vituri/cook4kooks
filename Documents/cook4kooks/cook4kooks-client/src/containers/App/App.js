import React, { Component } from 'react'
import TopArea from '../TopArea/TopArea';
import JsonData from '../../data/data.json';
import MainArea from '../MainArea/MainArea';
import Scroll from '../../components/Scroll';



class App extends Component {
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
