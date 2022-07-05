import { a } from "@/a"

const b = import("./b")

import { JsxDemo } from "./jsx-demo"
import { x } from "@/ts-demo"
import { TsxDemo } from "./tsx-demo"

import '@/scss-demo.scss'
import vars from '@/scss-demo.scss'
import '@/less-demo.less'
import vars2 from '@/less-demo.less'

console.log(JsxDemo)
console.log(x)
console.log(TsxDemo)
console.log('vars-----',vars)
console.log('vars2-----',vars2)
const sayHi = () => {
  console.log("a is", a)
  console.log("b is", b)
  console.log(Promise.resolve("test promise"))
}

sayHi()
