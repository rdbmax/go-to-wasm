import React, { useState, useEffect } from 'react'

const longJsTask = loopTime => new Promise((resolve) => {
  const t0 = performance.now();

  let counter = 0;
  let data = 1;

  while (counter < loopTime) {
    data = Math.sqrt(data * counter) + 10;
    counter++;
  }

  resolve(Math.floor(performance.now() - t0));
});

const longGoTask = loopTime => new Promise((resolve) => {
  const t0 = performance.now();

  longRunningTaskGO(loopTime);

  resolve(Math.floor(performance.now() - t0));
});

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [jsTiming, setJsTiming] = useState();
  const [goTiming, setGoTiming] = useState();
  const [loopTime] = useState(100000000);

  useEffect(
    () => {
      WebAssembly
        .instantiateStreaming(
          fetch('http://localhost:3000'),
          go.importObject
        )
        .then(async result => {
          go.run(result.instance)
          setIsLoading(false)
        })
    },
    [],
  );

  const onClickLongRunningTask = () => {
    longJsTask(loopTime).then(setJsTiming);
  };

  const onClickLongRunningTaskGO = () => {
    longGoTask(loopTime).then(setGoTiming);
  };

  return isLoading
    ? <div>Loading</div>
    : <div>
      <button onClick={onClickLongRunningTask}>Long running Task</button>
      <button onClick={onClickLongRunningTaskGO}>Long running Task with Go</button>
      { jsTiming && <p>JS function timing {jsTiming} ms</p> }
      { goTiming && <p>GO function timing {goTiming} ms</p> }
    </div>;
};

export default App;
