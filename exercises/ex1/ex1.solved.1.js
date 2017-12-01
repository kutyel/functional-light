const bar = (x, y) => {
  let z
  ;(function foo(x) {
    y++
    z = x * y
  })(x)

  return z
}

console.log(bar(20, 5)) // 120
console.log(bar(25, 6)) // 175
