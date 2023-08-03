import { Left, Right, None, Some } from '../Monad'
import { describe, it, expect } from 'vitest'

describe('Left', () => {
  it('should map the value using the provided function', () => {
    const left = Left(5)
    const mappedLeft = left.map(x => x * 2)

    expect(
      mappedLeft.fold(
        x => x,
        x => x,
      ),
    ).toBe(5) // Left's map function should have no effect on Left values
  })

  it('should fold the value using the provided functions', () => {
    const left = Left(5)
    const result = left.fold(
      x => x * 2,
      x => x + 10,
    )

    expect(result).toBe(10) // Left's fold should use the left function
  })

  it('should chain the value using the provided function', () => {
    const left = Left(5)
    const chainedLeft = left.chain(x => Right(x * 2))

    expect(
      chainedLeft.fold(
        x => x,
        x => x,
      ),
    ).toBe(5) // Left's chain function should have no effect on Left values
  })

  it('should inspect the value', () => {
    const left = Left(5)

    expect(left.inspect).toBe('Left(5)')
  })
})

describe('Right', () => {
  it('should map the value using the provided function', () => {
    const right = Right(5)
    const mappedRight = right.map(x => x * 2)

    expect(
      mappedRight.fold(
        x => x,
        x => x,
      ),
    ).toBe(10) // Right's map function should apply the function to the value
  })

  it('should fold the value using the provided functions', () => {
    const right = Right(5)
    const result = right.fold(
      x => x * 2,
      x => x + 10,
    )

    expect(result).toBe(15) // Right's fold should use the right function
  })

  it('should chain the value using the provided function', () => {
    const right = Right(5)
    const chainedRight = right.chain(x => Right(x * 2))

    expect(
      chainedRight.fold(
        x => x,
        x => x,
      ),
    ).toBe(10) // Right's chain should apply the function to the value
  })

  it('should inspect the value', () => {
    const right = Right(5)

    expect(right.inspect).toBe('Right(5)')
  })
})

describe('Option (Some and None) Test Suite', () => {
  it('should create Some and None correctly', () => {
    const someValue = Some(42)
    const noneValue = None

    expect(someValue.getOrElse(0)).toBe(42)
    expect(noneValue.getOrElse(0)).toBe(0)
  })

  it('should correctly map Some and None', () => {
    const someValue = Some(42)
    const noneValue = None

    const mappedSome = someValue.map(value => value + 10)
    const mappedNone = noneValue.map(value => value + 10)

    expect(mappedSome.getOrElse(0)).toBe(52)
    expect(mappedNone.getOrElse(0)).toBe(0)
  })

  it('should correctly flatMap Some and None', () => {
    const someValue = Some(42)
    const noneValue = None

    const divide = (x: number, y: number) => (y !== 0 ? Some(x / y) : None)

    const flatMappedSome = someValue.flatMap(value => divide(value, 2))
    const flatMappedNone = noneValue.flatMap(value => divide(value, 2))

    expect(flatMappedSome.getOrElse(0)).toBe(21)
    expect(flatMappedNone.getOrElse(0)).toBe(0)
  })
})
