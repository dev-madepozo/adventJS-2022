/**
 * Challenge # 11
 * URL: https://adventjs.dev/es/challenges/2022/11
 */


function getCompleted(part, total) {
  if (part === total) return '1/1'

  const [ph, pm, ps] = part.split(':')
  const pt = ph * 3600 + pm * 60 + +ps

  const [th, tm, ts] = total.split(':')
  const tt = th * 3600 + tm * 60 + +ts

  let result = ''
  let counter = 1

  while(!result) {
    const div = pt / counter
    result = tt % div ? '' : `${pt/div}/${tt/div}`
    counter++
  }

  return result
}
