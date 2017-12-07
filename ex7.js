const expect = require('expect')

const f = x => () => x
expect(f(3)()).toBe(3)

// const one = () => 1
// const two = () => 2
// console.log(add(one(), two()))

const add = (x, y) => x + y
expect(add(2, 3)).toBe(5)

const add2 = (f, g) => add(f(), g())
expect(add2(() => 3, () => 6)).toBe(9)

const addn = fns => fns.reduce((f, g) => () => add2(f, g))()
expect(addn([() => 1, () => 2, () => 3])).toBe(6)

const isEven = x => x % 2 === 0
expect(isEven(2)).toBe(true)

const data = [10, 100, 30, 100, 42, 10, 15]

const fns = data
  .reduce((arr, x) => (!arr.includes(x) ? [...arr, x] : arr), [])
  .filter(isEven)
  .map(f)
expect(addn(fns)).toBe(182)

console.log('All your functions work correctly! 🎉🎉🎉')
