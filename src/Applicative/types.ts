export type Applicative<T> = {
  of<U>(value: U): Applicative<U>
  ap<U>(fnApplicative: Applicative<(value: T) => U>): Applicative<U>
}
