import {
    createSong
  } from '../use-cases'
  import makePostSong from './post-song'
  import notFound from './not-found'
  

  const postSong: any = makePostSong({ createSong })
  
  const commentController = Object.freeze({
    postSong,
    notFound
  })
  
  export default commentController
  export { postSong, notFound }
  