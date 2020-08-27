import makeSong from '../entities'
export default function makeCreateSong ({ songsDb }: any) {
  return async function createSong (songInfo: any) {
    
    const song: any = makeSong(songInfo);
    const exists = await songsDb.findById({ name: song.getId() })
    if (exists) {
      return exists
    }

    return songsDb.insert({
        id: song.getId(),
        name: song.getName()
    })
  }
}
