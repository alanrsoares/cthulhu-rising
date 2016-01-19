export const reverse = s => s.split('').reverse().join('')

export const mirror = xs => xs.map(x => x + reverse(x))
