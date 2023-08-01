export type Left<T> = {
  map: <U>(f: (x: T) => U) => Left<T>
  fold: <U>(f: (x: T) => U, g: (x: T) => U) => U
  chain: <U>(f: (x: T) => U) => Left<T>
  inspect: string
}

export type Right<T> = {
  map: <U>(f: (x: T) => U) => Right<U>
  fold: <U>(f: (x: T) => U, g: (x: T) => U) => U
  chain: <U>(f: (x: T) => Right<U>) => Right<U>
  inspect: string
}
