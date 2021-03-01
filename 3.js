import { Either, Ramda } from './deps.js'

const { Left, Right } = Either
const { add, is, multiply } = Ramda

Either.of(null)
  .chain(isNumber)
  .map(add(1))
  .map(multiply(2))
  .fold(
    v => console.log('Left: ', v),
    v => console.log('Right: ', v)
  )


function isNumber(v) {
  if (is(Number, v)) {
    return Right(v)
  } else {
    return Left('Not a Number')
  }
}
