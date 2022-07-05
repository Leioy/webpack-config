import { a } from "./a"

const b = import("./b")

const sayHi = () => {
  console.log("a is", a)
  console.log("b is", b)
  console.log(Promise.resolve("test promise"))
}

sayHi()
