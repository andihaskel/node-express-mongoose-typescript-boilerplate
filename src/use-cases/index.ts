import makeCreateSong from './create-song';
import songsDb from '../data-access';

const createSong = makeCreateSong({ songsDb })

const songService: any = Object.freeze({
    createSong
})

export default songService
export { createSong }