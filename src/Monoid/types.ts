export type Monoid<T> = {
  empty: T
  concat: (a: T, b: T) => T
}
