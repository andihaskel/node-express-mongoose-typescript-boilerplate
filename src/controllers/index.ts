import {
    createSong,
    createUser
  } from '../use-cases'
  import makePostController from './post-controller'
  import notFound from './not-found'
  

  const postSong = makePostController({ createSong });
  const registerUser = makePostController({ createUser });

  const songController = Object.freeze({
    postSong,
    notFound,
    registerUser
  })
  
  export default songController
  export { postSong, notFound, registerUser }
  