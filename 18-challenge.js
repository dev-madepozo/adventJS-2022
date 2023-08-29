/**
 * Challenge # 18
 * URL: https://adventjs.dev/es/challenges/2022/18
 */


function dryNumber(dry, numbers) {
  const list = []

  for(let i = 1; i <= numbers; i++) {
    i.toString().includes(dry) && list.push(i)
  }

  return list
}
