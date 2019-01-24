import React, { Component } from 'react'

class App extends Component {
  state = { isLoading: true }

  componentDidMount () {
    WebAssembly
      .instantiateStreaming(
        fetch('http://localhost:3000'),
        go.importObject
      )
      .then(async result => {
        go.run(result.instance)
        this.setState({ isLoading: false })
      })
  }

  onClickButton = () => {
    sayHi('bonjour')
  }

  render() {
    return this.state.isLoading
      ? <div>Loading</div>
      : <div><button onClick={this.onClickButton}>Click to say Hi in console!</button></div>
  }
}

export default App
