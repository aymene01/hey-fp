import { left, right, some } from '../Monad'
import { describe, it, expect } from 'vitest'

describe('Left', () => {
  it('should map the value using the provided function', () => {
    const myLeft = left(5)
    const mappedLeft = myLeft.map(x => x * 2)

    expect(
      mappedLeft.fold(
        x => x,
        x => x,
      ),
    ).toBe(5)
  })

  it('should fold the value using the provided functions', () => {
    const myLeft = left(5)
    const result = myLeft.fold(
      x => x * 2,
      x => x + 10,
    )

    expect(result).toBe(10)
  })

  it('should chain the value using the provided function', () => {
    const myLeft = left(5)
    const chainedLeft = myLeft.chain(x => right(x * 2))

    expect(
      chainedLeft.fold(
        x => x,
        x => x,
      ),
    ).toBe(5)
  })

  it('should inspect the value', () => {
    const myLeft = left(5)

    expect(myLeft.value).toBe(5)
  })
})

describe('Right', () => {
  it('should map the value using the provided function', () => {
    const myRigth = right(5)
    const mappedRight = myRigth.map(x => x * 2)

    expect(
      mappedRight.fold(
        x => x,
        x => x,
      ),
    ).toBe(10)
  })

  it('should fold the value using the provided functions', () => {
    const myRigth = right(5)
    const result = myRigth.fold(
      x => x * 2,
      x => x + 10,
    )

    expect(result).toBe(15)
  })

  it('should chain the value using the provided function', () => {
    const myRigth = right(5)
    const chainedRight = myRigth.chain(x => right(x * 2))

    expect(
      chainedRight.fold(
        x => x,
        x => x,
      ),
    ).toBe(10) // Right's chain should apply the function to the value
  })

  it('should inspect the value', () => {
    const myRigth = right(5)

    expect(myRigth.inspect).toBe('Right(5)')
  })
})
describe('Option functions', () => {
  it('should create a Some option with a value', () => {
    const someOption = some(42)
    expect(someOption._tag).toBe('Some')

    if (someOption._tag === 'Some') {
      expect(someOption.value).toBe(42)
    }
  })
})
