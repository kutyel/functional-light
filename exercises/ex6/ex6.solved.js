const mult = (x, y, ...nums) => (!nums.length ? x * y : x * mult(y, ...nums))

console.log(mult(3, 4, 5)) // 60

console.log(mult(3, 4, 5, 6)) // 360 🎉
