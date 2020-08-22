import makeCreatSong from './create-song';
import songsDb from '../data-access';

const createSong = makeCreatSong({ songsDb })

const songService: any = Object.freeze({
    createSong
})

export default songService
export { createSong }