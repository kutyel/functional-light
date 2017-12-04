const { random, round } = Math

const lotteryNum = () => round(random() * 100) % 58 + 1

const pickNumbers = arr => {
  let num = lotteryNum()
  while (arr.includes(num)) num = lotteryNum()
  return [...arr, num].sort((x, y) => x - y)
}

let luckyLotteryNumbers = []

for (let i = 0; i < 6; i++) {
  luckyLotteryNumbers = pickNumbers(Object.freeze(luckyLotteryNumbers))
}

console.log(luckyLotteryNumbers)
