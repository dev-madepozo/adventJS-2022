/**
 * Challenge # 06
 * URL: https://adventjs.dev/es/challenges/2022/6
 */


function createCube(size) {
  const rows = Array.from({ length: size * 2 })

  for( let i = 1; i <= size; i++) {
    const top = ' '.repeat(size - i) + '/\\'.repeat(i) + '_\\'.repeat(size)
    rows[i - 1] = top
    const bottom = ' '.repeat(size - i) + '\\/'.repeat(i) + '_/'.repeat(size)
    rows[size * 2 - i] = bottom
  }

  return rows.join('\n')
}
