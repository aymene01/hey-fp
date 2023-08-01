import { Left, Right } from './monad'
import { Either } from './types'

export const checkAge = (age: number): Either<number, string> => {
  return age > 18 ? Right(age) : Left('You must be 18 minimum')
}
