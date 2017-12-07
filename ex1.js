//#region Exercise 1.1

function foo(x) {
  y++
  z = x * y
}

const bar = (currX, currY) => {
  const [oldY, oldZ] = [y, z]
  y = currY
  foo(currX)
  const [newY, newZ] = [y, z]
  ;[y, z] = [oldY, oldZ]
  return newZ
}

let y, z

console.log(bar(20, 5)) // 120
console.log(bar(25, 6)) // 175

//#endregion
//#region Exercise 1.2

const baz = (x, y) => {
  let z
  ;(function foo(x) {
    y++
    z = x * y
  })(x)

  return z
}

console.log(baz(20, 5)) // 120
console.log(baz(25, 6)) // 175

//#endregion
