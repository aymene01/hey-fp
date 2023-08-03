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

export type Either<R, L> = Right<R> | Left<L>

export type Option<T> = {
  map<U>(fn: (value: T) => U): Option<U>
  flatMap<U>(fn: (value: T) => Option<U>): Option<U>
  getOrElse(defaultValue: any): any
}
