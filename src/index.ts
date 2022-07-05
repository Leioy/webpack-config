import { a } from "@/a"

const b = import("./b")

import { JsxDemo } from "./jsx-demo"
import { x } from "@/ts-demo"
import { TsxDemo } from "./tsx-demo"

import '@/scss-demo.scss'
import vars from '@/scss-demo.scss'

console.log(JsxDemo)
console.log(x)
console.log(TsxDemo)
console.log('vars-----',vars)
const sayHi = () => {
  console.log("a is", a)
  console.log("b is", b)
  console.log(Promise.resolve("test promise"))
}

sayHi()
