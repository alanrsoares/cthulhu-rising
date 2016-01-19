export const reverse = s => s.split('').reverse().join('')

export const symmetry = xs => xs.map(x => x + reverse(x))
