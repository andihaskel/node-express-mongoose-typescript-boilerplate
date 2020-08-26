import {
    createSong
  } from '../use-cases'
  import makePostSong from './post-song'
  import hola from './hola'
  import notFound from './not-found'
  

  const postSong = makePostSong({ createSong });
  const hola2 = hola();

  const songController = Object.freeze({
    postSong,
    notFound,
    hola2
  })
  
  export default songController
  export { postSong, notFound, hola2 }
  