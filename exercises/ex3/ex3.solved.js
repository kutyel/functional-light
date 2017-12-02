const increment = x => x + 1
const decrement = x => x - 1
const double = x => x * 2
const half = x => x / 2

const compose = (...fns) => args => fns.reduceRight((x, f) => f(x), args)
const pipe = (...fns) => args => fns.reduce((x, f) => f(x), args)

const f = compose(decrement, double, increment, half)
const p = pipe(half, increment, double, decrement)

console.log(f(3) === 4) // true
console.log(f(3) === p(3)) // true
