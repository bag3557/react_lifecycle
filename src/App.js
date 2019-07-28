import React, { Component } from 'react'
import ABC from "./ABC";
class App extends Component {
  constructor(props) {
    super(props)
    this.state ={
      isClicked: false,
      changeProps: true
    }
  }
  render() {
    return (
      <div>
        <button onClick={() => this.setState({isClicked: !this.state.isClicked})}>Click Me from APP</button>
        <br />
        <button onClick={() => this.setState({changeProps: !this.state.changeProps})}>Click Me from APP for props</button>
        {!this.state.isClicked && <ABC changeProps={this.state.changeProps}/>}
      </div>
    )
  }
}

export default App