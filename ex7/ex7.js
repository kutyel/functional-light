// const one = () => 1
// const two = () => 2
const f = x => () => x

const add = (x, y) => x + y

// console.log(add(one(), two()))

const add2 = (f, g) => add(f(), g())

const addn = fns => fns.reduce((f, g) => () => add2(f, g))()

const data = [10, 100, 30, 100, 42, 10, 15]

const isEven = x => x % 2 === 0

const fns = data
  .reduce((arr, x) => (!arr.includes(x) ? [...arr, x] : arr), [])
  .filter(isEven)
  .map(f)

module.exports = { add, add2, addn, f, fns, isEven }
