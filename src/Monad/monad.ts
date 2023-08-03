import { Left, Right, Either, Option } from './types'

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

const some = <A>(x: A): Option<A> => ({ _tag: 'Some', value: x })

const none: Option<never> = { _tag: 'None' }

const isNone = <A>(x: Option<A>): boolean => x._tag === 'None'

export { left, right, fromNullable, some, none, isNone }
