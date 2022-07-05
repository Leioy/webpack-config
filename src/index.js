import { a } from "./a"

const b = import("./b")

import {JsxDemo} from './jsx-demo.jsx'

console.log(JsxDemo)

const sayHi = () => {
  console.log("a is", a)
  console.log("b is", b)
  console.log(Promise.resolve("test promise"))
}

sayHi()
