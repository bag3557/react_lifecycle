import React, { Component } from 'react'

class ABC extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isClicked : false,
      changeProps: props.changeProps || false
    }
    console.log("1. constructor ABC")
  }
  // componentWillMount(){
  //   console.log(this.state.changeProps);    
  //   this.setState({changeProps: this.props.changeProps})
  //   console.log("2. componentWillMount ABC")
  // }
  // componentWillReceiveProps(nextProps){
  //   if(this.props.changeProps !== nextProps.changeProps){
  //     console.log("ChangeProps are changed")
  //   }
  //   console.log("0. componentWillReceiveProps ABC")
  // }
  shouldComponentUpdate(nextProps, nextState){
    if(this.props.changeProps !== nextProps.changeProps){
      console.log("1. shouldComponentUpdate ABC update")
      return true
    }
    if(this.state.isClicked !== nextState.isClicked){
      console.log("1. shouldComponentUpdate ABC update with state")
      return true
    }
    console.log("1. shouldComponentUpdate ABC not update")
    return false
  }
  // componentWillUpdate(){
  //   console.log("2. componentWillUpdate ABC")
  // }
  render() {
    console.log("3. render ABC")
    return (
      <div>
        <button onClick={() => this.setState({isClicked: !this.state.isClicked})}>Click Me</button>
          <br/>
          ABC
      </div>
    )
  }
  componentDidMount(){
    console.log("4. componentDidMount ABC")
  }
  componentDidUpdate(){
    console.log("4. componentDidUpdate ABC")
  }
  componentWillUnmount(){
    this.setState({isClicked: false})
    console.log("5. componentWillUnmount ABC", this.state.isClicked)
  }
}

export default ABC;
