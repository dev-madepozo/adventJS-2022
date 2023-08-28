/**
 * Challenge # 19
 * URL: https://adventjs.dev/es/challenges/2022/19
 */


function sortToys(toys, positions) {
  return Object.values(positions.reduce((acc, cur, i) => {
    acc[cur] = toys[i]
    return acc
  }, {}))
}
