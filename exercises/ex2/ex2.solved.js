const output = console.log
const not = fn => (...args) => !fn(...args)
const when = fn => predicate => (...args) => predicate(...args) && fn(...args)

const printIf = when(output)

const isShortEnough = ({ length }) => length <= 5
const isLongEnough = not(isShortEnough)

const msg1 = 'Hello'
const msg2 = `${msg1} World`

printIf(isShortEnough)(msg1) // Hello
printIf(isShortEnough)(msg2)
printIf(isLongEnough)(msg1)
printIf(isLongEnough)(msg2) // Hello World
