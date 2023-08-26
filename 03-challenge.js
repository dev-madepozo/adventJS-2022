/**
 * Challenge # 03
 * URL: https://adventjs.dev/es/challenges/2022/3
 */

function distributeGifts(packOfGifts, reindeers) {
  return Math.floor(
    reindeers.join('').length * 2 / packOfGifts.join('').length
  )
}
