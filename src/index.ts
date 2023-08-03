export * from './Functor'
export * from './Monad'

const sumAll = (xs: number[]): number => {
  if (xs.length === 0) {
    return 0
  }
  const [head, ...rest] = xs

  return head + sumAll(rest)
}

const sumAll2 = (xs: number[]): number => (xs.length === 0 ? 0 : xs[0] + sumAll2(xs.slice(1)))

console.log(sumAll2([1, 8, 9]))
