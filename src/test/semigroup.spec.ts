import * as SG from '../Semigroup'
import { describe, expect, it } from 'vitest'

describe('Product', () => {
  it('should multiply the value using the provided function', () => {
    const product1 = SG.Product(2)
    const product2 = SG.Product(3)

    const result = product1.concat(product2)

    expect(result.inspect).toBe('Product(6)')
  })
})

describe('Sum', () => {
  it('should add the value using the provided function', () => {
    const sum1 = SG.Sum(2)
    const sum2 = SG.Sum(3)

    const result = sum1.concat(sum2)

    expect(result.inspect).toBe('Sum(5)')
  })
})

describe('Any', () => {
  it('should perform a logical OR operation using the provided function', () => {
    const any1 = SG.Any(true)
    const any2 = SG.Any(false)

    const result = any1.concat(any2)

    expect(result.inspect).toBe('Any(true)')
  })
})
