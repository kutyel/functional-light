const expect = require('expect')

const { add, add2, addn, f, fns, isEven } = require('./ex7')

expect(add(2, 3)).toBe(5)

expect(add2(() => 3, () => 6)).toBe(9)

expect(addn([() => 1, () => 2, () => 3])).toBe(6)

expect(f(3)()).toBe(3)

expect(addn(fns)).toBe(182)

expect(isEven(2)).toBe(true)

console.log('All your functions work correctly! 🎉🎉🎉')
