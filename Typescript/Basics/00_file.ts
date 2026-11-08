# Type inferencing
let name = "Shubham" // automatically it will infer data types as string
let value = Math.random()>0.5 ? 10 : '5' // here it will infer string | number

# Union
let subs: number | string = '1M' // here both data types works

// it also works for other values
let status: 'pending' | 'active'| 'merged' = 'pending'

// any means any data type allowed and ndefined means if no assignment can be done is the case
let value: any | undefined
console.log(value) // it returns error if type is not undefined

// best practices type narrowing
function getValue(value: string | number){
  if (typeof value == "string"){
    return `value is string ${value}`
  }
  return `value is number ${value}`

function retmsg(msg: string){
  if(msg){
    return msg
  }
  return "no msg provided"
