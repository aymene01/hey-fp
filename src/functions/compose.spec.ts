import { compose } from './compose'
import { describe, it, expect } from 'vitest'

const addOne = (x: number) => x + 1
const double = (x: number) => x * 2
const square = (x: number) => x * x

describe('compose', () => {
  it('should correctly compose two functions', () => {
    const addOneAndDouble = compose(double, addOne)
    const addOneAndSquare = compose(square, addOne)

    expect(addOneAndDouble(3)).toEqual(8)
    expect(addOneAndSquare(3)).toEqual(16)
  })
})
