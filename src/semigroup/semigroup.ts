import * as Types from './types'

export const Product = (x: number): Types.Product => ({
  x,
  concat: ({ x: y }: { x: number }) => Product(x * y),
  inspect: `Product(${x})`,
})

export const Sum = (x: number): Types.Sum => ({
  x,
  concat: ({ x: y }: { x: number }) => Sum(x + y),
  inspect: `Sum(${x})`,
})

export const Any = (x: boolean): Types.Any => ({
  x,
  concat: ({ x: y }: { x: boolean }) => Any(x || y),
  inspect: `Any(${x})`,
})
