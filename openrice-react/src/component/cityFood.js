import React,{Component} from 'react';
import {render} from 'react-dom';
import Head from './Head';
class cityFood extends Component{
  constructor(){
    super();
    this.state={

    }
  }
  componentDidMount(){
    console.log(this.props)
  }
  componentWillReceiveProps(props){
    
  }
  render(){
    console.log(this.props.match)
      return(
        <div>

        <div>城市热门门店</div>
      </div>
    )
  }

}

export default cityFood; 