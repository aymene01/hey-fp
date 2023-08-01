import { IdFunctor as IdFunctorType } from './types'

export const IdFunctor = <T>(x: T): IdFunctorType<T> => ({
  map: <U>(f: (x: T) => U) => IdFunctor(f(x)),
  fold: <U>(f: (x: T) => U) => f(x),
  chain: <U>(f: (x: T) => U) => f(x),
  inspect: `Box(${x})`,
})
