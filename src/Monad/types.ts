export type Left<T> = {
  _tag: 'left'
  value: T
  map: <U>(f: (x: T) => U) => Left<T>
  fold: <U>(f: (x: T) => U, g: (x: T) => U) => U
  chain: <U>(f: (x: T) => U) => Left<T>
  inspect: string
}

export type Right<T> = {
  _tag: 'rigth'
  value: T
  map: <U>(f: (x: T) => U) => Right<U>
  fold: <U>(f: (x: T) => U, g: (x: T) => U) => U
  chain: <U>(f: (x: T) => Right<U>) => Right<U>
  inspect: string
}

export type Either<E, A> = Right<E> | Left<A>

export type Some<A> = {
  _tag: 'Some'
  value: A
}

export type None = {
  _tag: 'None'
}

export type Option<T> = Some<T> | None
