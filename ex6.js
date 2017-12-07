const mult = (x, ...nums) => (!nums.length ? x : x * mult(...nums))

console.log(mult(3, 4, 5)) // 60

console.log(mult(3, 4, 5, 6)) // 360 🎉
