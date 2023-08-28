/**
 * Challenge # 12
 * URL: https://adventjs.dev/es/challenges/2022/12
 */


function selectSleigh(distance, sleighs) {
  for(let i = sleighs.length - 1; i >= 0; i--) {
    if (sleighs[i].consumption * distance <= 20) {
      return sleighs[i].name
    }
  }

  return null
}
