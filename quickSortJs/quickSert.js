// jsで、再帰関数の一番シンプルな例。
// １からnまでの自然数の合計を出す。
const sumAllNumberFrom1ToVariable = n => {
  if (n <= 0) return n

  return n + sumAllNumberFrom1ToVariable(n - 1)
}

result = sumAllNumberFrom1ToVariable(5)

console.log(result)

/* -------------------- quickSort --------------------- */

// ピボットを決めて、そのピポットにより、小さい値、大きい値でグループ分けする。それを再帰的に繰り返す。
// ピポットの値をどこにするかで計算量が変わってくる。
const quickSort = arr => {
  if (arr < 2) return arr

  const pivot = arr[0]
  const minArr = arr.filter(arr => arr < pivot)
  const maxArr = arr.filter(arr => arr > pivot)

  return [...quickSort(minArr), pivot, ...quickSort(maxArr)]
}

const arr = quickSort([2, 34, 8, 87, 1232, 43, 23])

console.log(arr)
