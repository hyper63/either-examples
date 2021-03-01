import { Either } from './deps.js'

const { fromNullable } = Either

Either.of(null)
  .chain(fromNullable)
  .fold(
    v => console.log('Left: ', v),
    _ => console.log('I should not get called.')
  )

