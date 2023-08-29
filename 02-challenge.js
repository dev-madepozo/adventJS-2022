/**
 * Challenge # 02
 * URL: https://adventjs.dev/es/challenges/2022/2
 */

function countHours(year, holidays) {
  return holidays.reduce((acc, cur) => {
    return '06'.includes(new Date(year + '/' + cur).getDay())
      ? acc : acc + 2
  }, 0)
}
