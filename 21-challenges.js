/**
 * Challenge # 21
 * URL: https://adventjs.dev/es/challenges/2022/21
 */


function printTable(gifts) {
  const lengths = gifts.reduce((acc, { name, quantity }) => {
    acc.n = name.length > acc.n ? name.length : acc.n
    acc.q = quantity.toString().length > acc.q
      ? quantity.toString().length : acc.q
    return acc
  }, {n: 4, q: 8})

  return `${'+'.repeat(lengths.n + lengths.q + 7)}
| Gift${' '.repeat(lengths.n - 4)} | Quantity${' '.repeat(lengths.q - 8)} |
| ${'-'.repeat(lengths.n)} | ${'-'.repeat(lengths.q)} |
${gifts.map(({ name, quantity }) => {
  return '| ' + name + ' '.repeat(lengths.n - name.length) + ' | ' +
  quantity + ' '.repeat(lengths.q - quantity.toString().length) +' |'
}).join('\n')}
${'*'.repeat(lengths.n + lengths.q + 7)}`
}
