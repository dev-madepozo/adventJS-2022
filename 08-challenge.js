/**
 * Challenge # 08
 * URL: https://adventjs.dev/es/challenges/2022/8
 */

function checkPart(part) {
  return part.split('').some((n, i) => {
    const piece = [...part]
    piece.splice(i, 1)
    return piece.join('') === piece.reverse().join('')
  })
}
