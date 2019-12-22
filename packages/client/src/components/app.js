import React, { Component } from 'react'

class App extends Component {
  state = {
    isLoading: true,
    jsTiming: undefined,
    goTiming: undefined,
    loopTime: 100000000
  }

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

  onClickLongRunningTask = () => {
    const t0 = performance.now();

    let counter = 0;
    let data = 1;

    while (counter < this.state.loopTime) {
      data = Math.sqrt(data * counter) + 10
      counter++;
    }

    const t1 = performance.now();

    this.setState({ jsTiming: Math.floor(t1 - t0) })
  }

  onClickLongRunningTaskGO = () => {
    const t0 = performance.now();

    const returnedValue = longRunningTaskGO(this.state.loopTime);

    const t1 = performance.now();
    
    this.setState({ goTiming: Math.floor(t1 - t0) })
  }

  render() {
    return this.state.isLoading
      ? <div>Loading</div>
      : <div>
        <button onClick={this.onClickLongRunningTask}>Long running Task</button>
        <button onClick={this.onClickLongRunningTaskGO}>Long running Task with Go</button>
        { this.state.jsTiming && <p>Js function timing {this.state.jsTiming} ms</p> }
        { this.state.goTiming && <p>Js function timing {this.state.goTiming} ms</p> }
      </div>
  }
}

export default App
