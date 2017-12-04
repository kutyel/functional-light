const { Observable } = require('rxjs')

//#region

const countdownLength = 5

const formatTime = time => {
  const hours = Math.floor(time / 60)
  let minutes = time % 60
  if (minutes < 10) minutes = `0${minutes}`
  return `${hours}:${minutes}`
}

const formatCountdown = count => formatTime(countdownLength - count - 1)

//#endregion

const val = x => x.value
const timer = Observable.interval(1000).timeInterval()
const countdown = Observable.merge(
  Observable.of(-1),
  timer.take(countdownLength).map(val)
).map(formatCountdown)

countdown.subscribe(console.log, null, () => console.log('Complete!'))
