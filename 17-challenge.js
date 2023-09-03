/**
 * Challenge # 17
 * URL: https://adventjs.dev/es/challenges/2022/17
 */


function carryGifts(gifts, maxWeight) {
  const carries = []

  for(let i = 0; i < gifts.length; i++) {
    if (carries.length && (carries.at(-1).replaceAll(' ', '').length + gifts[i].length <= maxWeight)) {
      carries[carries.length - 1] = carries.at(-1) + ' ' + gifts[i]
    } else {
      if (gifts[i].length <= maxWeight) {
        carries.push(gifts[i])
      }
    }
  }

  return carries
}
