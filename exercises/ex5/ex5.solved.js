const foo = (x, y) => () => x + y

const x = foo(3, 4)

console.log(x()) // 7
console.log(x()) // 7
