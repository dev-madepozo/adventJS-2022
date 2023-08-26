/**
 * Challenge # 01
 * URL: https://adventjs.dev/es/challenges/2022/1
 */

function wrapping(gifts) {
  return gifts.map(g => 
    `${'*'.repeat(g.length + 2)}\n*${g}*\n${'*'.repeat(g.length + 2)}`
  )
}
