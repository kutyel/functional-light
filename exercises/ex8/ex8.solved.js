//#region

const binary = f => (x, y) => f(x, y)
const compose = (...fns) => args => fns.reduceRight((x, f) => f(x), args)
const curry = (f, arr = []) => (...args) =>
  (x => (x.length >= f.length ? f(...x) : curry(f, x)))([...arr, ...args])
const pipe = (...fns) => compose(...fns.reverse())

//#endregion

//#region

const isOdd = v => v % 2 == 1
const mult = (x, y) => x * y
const sum = (x, y) => x + y
const listSum = list => list.reduce(sum, 0)
const listProduct = list => list.reduce(mult, 1)

//#endregion

//#region

const mapObj = (f, o) =>
  Object.entries(o).reduce(
    (obj, [key, value]) => ((obj[key] = f(value)), obj),
    {}
  )

const filterObj = (f, o) =>
  Object.entries(o).reduce(
    (obj, [key, value]) => (f(value) && (obj[key] = value), obj),
    {}
  )

const reduceObj = (f, init, o) =>
  Object.values(o).reduce((acc, v) => f(acc, v), init)

//#endregion

const nums = {
  first: [3, 5, 2, 4, 9, 1, 12, 3],
  second: [5, 7, 7, 9, 10, 4, 2],
  third: [1, 1, 3, 2],
}

const filteredNums = filterObj(list => isOdd(listSum(list)), nums)

const filteredNumsProducts = mapObj(list => listProduct(list), filteredNums)

console.log('original:', reduceObj(sum, 0, filteredNumsProducts)) // 38886

// The same code above refactored...

const ult = pipe(
  curry(filterObj)(compose(isOdd, listSum)),
  curry(mapObj)(listProduct),
  curry(reduceObj)(sum)(0)
)

console.log('refactor:', ult(nums)) // 38886

// Another crazy alternative...

const alt = [
  curry(filterObj)(compose(isOdd, listSum)),
  curry(mapObj)(listProduct),
  curry(reduceObj)(sum)(0),
].reduce(binary(pipe))

console.log('alternat:', alt(nums)) // 38886
