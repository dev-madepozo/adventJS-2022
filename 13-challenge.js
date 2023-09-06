/**
 * Challenge # 13
 * URL: https://adventjs.dev/es/challenges/2022/13
 */


function getFilesToBackup(lastBackup, changes) {
  return [...new Set(
    changes.filter(([,time]) => time > lastBackup)
    .map(([id]) => id)
  )].sort((a, b) => a - b)
}
