/**
 * Challenge # 07
 * URL: https://adventjs.dev/es/challenges/2022/22
 */


function checkStepNumbers(systemNames, stepNumbers) {
  const comparison = {}

  return systemNames.every((name, i) => {
    if (comparison[name] >= stepNumbers[i]) {
      return false
    }

    comparison[name] = stepNumbers[i]

    return true
  })
}
