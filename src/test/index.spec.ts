import { describe, it, expect } from 'vitest'

const sum = (a: number, b: number) => a + b

describe('test', () => {
  it('Should be equal to 3', () => {
    const result = sum(1, 3)

    expect(result).toBe(4)
  })
})
