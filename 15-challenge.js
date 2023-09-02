/**
 * Challenge # 15
 * URL: https://adventjs.dev/es/challenges/2022/15
 */

function decorateTree(base) {
  const combinations = {
    'BB': 'B',
    'PP': 'P',
    'RR': 'R',
    'BP': 'R',
    'PB': 'R',
    'RP': 'B',
    'PR': 'B',
    'BR': 'P',
    'RB': 'P'
  }

  const tree = [base]

  while(tree[0].length > 1) {
    const letters = tree[0].replaceAll(' ', '')
    let newLine = []

    for(let i = 0; i < letters.length - 1; i++) {
      newLine[i] = combinations[letters.substr(i, 2)]
    }
    tree.unshift(newLine.join(' '))
  }

  return tree
}
