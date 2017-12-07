const { random, round } = Math

const lotteryNum = () => round(random() * 100) % 58 + 1

// Recursion ftw! 💪🏼
const pickNumbers = (arr, num = lotteryNum()) =>
  arr.includes(num) ? pickNumbers(arr) : [...arr, num].sort((x, y) => x - y)

let luckyLotteryNumbers = []

for (let i = 0; i < 6; i++) {
  luckyLotteryNumbers = pickNumbers(Object.freeze(luckyLotteryNumbers))
}

console.log(luckyLotteryNumbers)
