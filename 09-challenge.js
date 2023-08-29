/**
 * Challenge # 09
 * URL: https://adventjs.dev/es/challenges/2022/9
 */


function countTime(leds) {
  let count = 0

  while(leds.some(led => !led)) {
    leds = leds.map((led, i) => {
      return led || leds.at(i - 1) ? 1 : 0
    })
    count += 7
  }

  return count
}
