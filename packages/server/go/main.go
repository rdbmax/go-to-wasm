package main

import (
	"fmt"
	"syscall/js"
)

// return something in sayHi function
// create a function with a big loop to compare perfs

func sayHi(args []js.Value) {
	returnString := fmt.Sprintf("Hi %v!", args[0])
	fmt.Println(returnString)
}

func registerCallbacks() {
	js.Global().Set("sayHi", js.NewCallback(sayHi))
}

func main() {
	c := make(chan struct{}, 0)
	registerCallbacks()
	<-c
}
