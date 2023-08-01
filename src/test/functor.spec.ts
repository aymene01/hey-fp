import { IdFunctor } from '../functor'
import { describe, it, expect } from 'vitest'

describe('IdFunctor', () => {
  it('should map the value using the provided function', () => {
    const id = IdFunctor(5)
    const mappedId = id.map(x => x * 2)

    expect(mappedId.fold(x => x)).toBe(10)
  })

  it('should fold the value using the provided function', () => {
    const id = IdFunctor(5)
    const result = id.fold(x => x * 2)

    expect(result).toBe(10)
  })

  it('should chain the value using the provided function', () => {
    const id = IdFunctor(5)
    const chainedId = id.chain(x => IdFunctor(x * 2))

    expect(chainedId.fold(x => x)).toBe(10)
  })

  it('should inspect the value', () => {
    const id = IdFunctor(5)

    expect(id.inspect).toBe('Box(5)')
  })
})
