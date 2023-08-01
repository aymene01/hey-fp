import { Left, Right } from './types'

const Left = <T>(value: T): Left<T> => ({
  map: <U>(f: (x: T) => U) => Left(value),
  fold: <U>(f: (x: T) => U, g: (x: T) => U) => f(value),
  chain: <U>(f: (x: T) => U) => Left(value),
  inspect: `Left(${value})`,
})

const Right = <T>(value: T): Right<T> => ({
  map: <U>(f: (x: T) => U) => Right(f(value)),
  fold: <U>(f: (x: T) => U, g: (x: T) => U) => g(value),
  chain: <U>(f: (x: T) => U) => f(value),
  inspect: `Right(${value})`,
})

export { Left, Right }
