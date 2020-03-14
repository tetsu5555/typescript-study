function process(value: string | number) {
  // コンパイル通らない
  return value.toUpperCase()
}

// 型ガードを追加
function process2(value: string | number) {
  if (typeof value === "string") {
    return value.toUpperCase()
  }
}

function process3(value: string | number) {
  if (typeof value === "string") {
    return value.toUpperCase()
  } else {
    return value.toFixed()
  }
}
