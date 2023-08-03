type List<A> = Nil | Cons<A>

interface Nil {
  _tag: 'Nil'
}

interface Cons<A> {
  _tag: 'Cons'
  head: A
  tail: List<A>
}

const nil: List<never> = { _tag: 'Nil' }

const cons = <A>(head: A, tail: List<A>): List<A> => ({
  _tag: 'Cons',
  head,
  tail,
})

const isNil = <A>(xs: List<A>): xs is Nil => xs._tag === 'Nil'

type ShowList = <A>(xs: List<A>) => string

const showList: ShowList = x => (isNil(x) ? '' : `${x.head}` + (isNil(x.tail) ? '' : `, ${showList(x.tail)})`))
