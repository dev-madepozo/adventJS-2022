/**
 * Challenge # 04
 * URL: https://adventjs.dev/es/challenges/2022/4
 */

function fitsInOneBox(boxes) {
  const ordered = boxes.sort((a, b) => a.h - b.h)

  return ordered.every((item, i) => {
    if (!ordered[i + 1]) return true

    const { l, w, h } = ordered[i + 1]
    return item.l < l && item.w < w && item.h < h
  })
}
