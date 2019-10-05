const a1 = [0 as 0, 1 as 1] // (0 | 1)[]

// コンパイルエラー
// a1.push(2)

const zero: 0 = 0
const one: 1 = 1
const a2 = [zero, one] // (0 | 1)[]
a2.push(1)

// コンパイルエラー
// a2.push(2)
