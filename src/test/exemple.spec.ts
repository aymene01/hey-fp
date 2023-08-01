import { checkAge } from '../Monad'
import { describe, it, expect } from 'vitest'
describe('checkAge function', () => {
  it('should return Right(age) for age greater than 18', () => {
    const age = 25
    const result = checkAge(age)
    console.log(result)
    expect(result.inspect).toBe('Right(25)')
  })

  it('should return Left("You must be 18 minimum") for age less than or equal to 18', () => {
    const age = 16
    const result = checkAge(age)
    expect(result.inspect).toBe('Left(You must be 18 minimum)')
  })
})
