import { left, right } from './monad'
import { Either } from './types'

export const checkAge = (age: number): Either<number, string> => {
  return age > 18 ? right(age) : left('You must be 18 minimum')
}
