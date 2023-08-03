import { Left, Right, Either, Option, None } from './types'

const left = <T>(value: T): Left<T> => ({
  map: <U>(f: (x: T) => U) => left(value),
  fold: <U>(f: (x: T) => U, g: (x: T) => U) => f(value),
  chain: <U>(f: (x: T) => U) => left(value),
  inspect: `Left(${value})`,
  _tag: 'left',
  value: value,
})

const right = <T>(value: T): Right<T> => ({
  map: <U>(f: (x: T) => U) => right(f(value)),
  fold: <U>(f: (x: T) => U, g: (x: T) => U) => g(value),
  chain: <U>(f: (x: T) => U) => f(value),
  inspect: `Right(${value})`,
  _tag: 'rigth',
  value: value,
})

const isLeft = <E, A>(x: Either<E, A>): boolean => x._tag === 'left'

const fromNullable = <T, U extends T>(value: T): Either<T, U> => (value ? right(value) : left(value as U))

const isNone = <A>(x: Option<A>): x is None => x._tag === 'None'

const some = <T>(value: T): Option<T> => ({
  map: fn => some(fn(value)),
  flatMap: fn => fn(value),
  getOrElse: () => value,
  _tag: 'Some',
  value: value,
})

//TODO implement none with Option<never>

export { left, right, fromNullable, some, isNone, isLeft }
