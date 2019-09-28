const wideningZero = 0
const nonWideningZero: 0 = 0
const asNonWideningZero = 0 as 0

let zeroA = wideningZero // number型になる
let zeroB = nonWideningZero // 0型
let zeroC = asNonWideningZero // 0型


zeroA = 1

// ↓は0型なのでコンパイルできない
zeroB = 1
zeroC = 1
