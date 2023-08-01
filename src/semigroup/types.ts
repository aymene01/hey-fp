export type Sum = {
  x: number
  concat: (y: Sum) => Sum
  inspect: string
}

export type Product = {
  x: number
  concat: (y: Product) => Product
  inspect: string
}

export type Any = {
  x: boolean
  concat: (y: Any) => Any
  inspect: string
}
