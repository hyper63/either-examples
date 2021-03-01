import { Either, Ramda } from './deps.js'

const { add, multiply } = Ramda

Either.of(1)
  .map(add(1))
  .map(multiply(2))
  .fold(
    v => console.log('Left: ', v),
    v => console.log('Right: ', v)
  )

