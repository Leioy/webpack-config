import { a } from "./a"

const b = import("./b")

import {JsxDemo} from './jsx-demo.jsx'
import { x } from './ts-demo.ts'
import {TsxDemo} from './tsx-demo.tsx'

console.log(JsxDemo)
console.log(x)
console.log(TsxDemo)
const sayHi = () => {
  console.log("a is", a)
  console.log("b is", b)
  console.log(Promise.resolve("test promise"))
}

sayHi()
