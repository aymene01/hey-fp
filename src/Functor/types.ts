export type IdFunctor<T> = {
  map: <U>(f: (x: T) => U) => IdFunctor<U>
  fold: <U>(f: (x: T) => U) => U
  chain: <U>(f: (x: T) => U) => U
  inspect: string
}
