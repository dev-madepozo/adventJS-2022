/**
 * Challenge # 16
 * URL: https://adventjs.dev/es/challenges/2022/16
 */


function fixLetter(letter) {
  return letter
    .replace(/(^\s+)|(\s+$)/g, '')
    .replace(/([.,!])(.*)/g, '$1 $2')
    .replace(/([.,?!\s])(?=\1)/g, '')
    .replace(/\s+([.,?!])/g, '$1')
    .replace(/santa claus/gi, 'Santa Claus')
    .replace(/\b([.?!] \w)|(^\w)/g, match => match.toUpperCase())
    .replace(/^.*\w$/, match => `${match}.`);
}
