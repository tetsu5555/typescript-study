const t1 = [false] as [boolean]
const t2 = [false, 1] as [boolean, number]
const t3 = [false, 1, '2'] as [boolean, number, string]

console.log(t3[0], t3[1], t3[2])
// index外の値を参照するとコンパイルエラーになる
// console.log(t3[3])

// index外に値を追加することはできる
// (boolean | number)は追加できる
t2.push(2)
// tupleに含まれるUnion Type以外を追加しようとするとコンパイルエラー
// t2.push("hoge")
