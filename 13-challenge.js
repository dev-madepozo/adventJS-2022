/**
 * Challenge # 13
 * URL: https://adventjs.dev/es/challenges/2022/13
 */


function getFilesToBackup(lastBackup, changes) {
  return Object.values(changes.reduce(
    (acc, [id, time]) => {
      if (time > lastBackup) acc[id] = id
      return acc
    }, {})
  )
}
