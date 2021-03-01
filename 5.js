import { Either } from './deps.js'

const { tryCatch } = Either

tryCatch(() => {
  throw new Error('Catch me if you can!')
})
  .fold(
    v => console.log('You got me!'),
    _ => conosle.log('You can\'t catch me, I am the gingerbread man!')
  )

