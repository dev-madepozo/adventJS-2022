/**
 * Challenge # 14
 * URL: https://adventjs.dev/es/challenges/2022/14
 */


function getOptimalPath(path) {
  return path.reduceRight((acc, cur) => {
    return cur.map((v, i) => {
      return v + Math.min(acc[i], acc[i + 1])
    })
  }).at(0)
}
