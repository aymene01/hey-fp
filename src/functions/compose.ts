export const compose =
  <T, U, V>(f: (arg: U) => V, g: (arg: T) => U) =>
  (x: T) =>
    f(g(x))
