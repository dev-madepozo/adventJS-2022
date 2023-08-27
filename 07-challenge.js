/**
 * Challenge # 07
 * URL: https://adventjs.dev/es/challenges/2022/7
 */

function getGiftsToRefill(a1, a2, a3) {
  const listOfGitfs = {}
  const listOfStores = [
    [...new Set(a1)], [...new Set(a2)], [...new Set(a3)]
  ]

  listOfStores.flat().forEach(gift => {
    listOfGitfs[gift] = (listOfGitfs[gift] || 0) + 1
  })

  return Object.keys(listOfGitfs).filter(key => listOfGitfs[key] === 1)
}
