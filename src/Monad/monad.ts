import { Left, Right, Either, Option } from './types'

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

const fromNullable = <T, U extends T>(value: T): Right<T> | Left<U> => (value ? Right(value) : Left(value as U))

const None: Option<never> = {
  map: () => None,
  flatMap: () => None,
  getOrElse: defaultValue => defaultValue as never,
}

const Some = <T>(value: T): Option<T> => ({
  map: fn => Some(fn(value)),
  flatMap: fn => fn(value),
  getOrElse: () => value,
})

const divide = (x: number, y: number): Option<number> => (y !== 0 ? Some(x / y) : None)

const result = Some(10)
  .flatMap(num => divide(num, 2))
  .map(result => result + 5)
  .getOrElse(0)

export { Left, Right, fromNullable, Some, None }
