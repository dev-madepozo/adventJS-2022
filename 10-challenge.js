/**
 * Challenge # 10
 * URL: https://adventjs.dev/es/challenges/2022/10
 */


function checkJump(heights) {
  const peakIndex = heights.indexOf(Math.max(...heights))

  return ![0, heights.length - 1].includes(peakIndex)
    && !heights.slice(0, peakIndex)
      .some((v, i, a) => v > a[i + 1])
    && !heights.slice(peakIndex + 1)
      .some((v, i, a) => v < a[i + 1])
}
