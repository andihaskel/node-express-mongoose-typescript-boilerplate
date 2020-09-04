import makeCreateSong from './create-song';
import makeCreateUser from './create-user';
import songsDb from '../data-access';
import bcryptjs from 'bcryptjs';


const createSong = makeCreateSong({ songsDb })
const createUser = makeCreateUser({ songsDb }, bcryptjs)


const songService: any = Object.freeze({
    createSong,
    createUser
})

export default songService
export { createSong, createUser }