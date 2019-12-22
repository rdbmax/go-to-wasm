package main

import (
  "syscall/js"
  "math"
)

func longRunning(this js.Value, args []js.Value) interface{} {
  counter := 0.0
  data := 1.0
  timeLoop := float64(args[0].Int())

  for counter < timeLoop {
    data = math.Sqrt(data * counter) + 10
		counter += 1
  }

  return js.ValueOf(data)
}

func registerCallbacks() {
	js.Global().Set("longRunningTaskGO", js.FuncOf(longRunning))
}

func main() {
	c := make(chan struct{}, 0)
	registerCallbacks()
	<-c
}
