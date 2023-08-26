/**
 * Challenge # 02
 * URL: https://adventjs.dev/es/challenges/2022/2
 */

function countHours(year, holidays) {
  return holidays.reduce((acc, cur) => {
    const day = new Date(year + '/' + cur).getDay()
    return day > 0 && day < 6 ? acc + 2 : acc
  }, 0)
}
