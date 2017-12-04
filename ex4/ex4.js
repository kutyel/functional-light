function lotteryNum() {
  return Math.round(Math.random() * 100) % 58 + 1
}

function pickNumbers() {}

var luckyLotteryNumbers = []

for (var i = 0; i < 6; i++) {
  pickNumbers()
}

console.log(luckyLotteryNumbers)
