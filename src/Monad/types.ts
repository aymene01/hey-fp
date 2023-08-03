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

export type Some<T> = {
  map: <U>(fn: (value: T) => U) => Option<U>
  flatMap: <U>(fn: (value: T) => Option<U>) => Option<U>
  getOrElse: () => T
  _tag: 'Some'
  value: T
}

export type None = {
  map: () => None
  flatMap: () => None
  getOrElse: <T>(defaultValue: T) => T
  _tag: 'None'
}

export type Option<T> = Some<T> | None
