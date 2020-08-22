import makeSongsLockDb from './songs-lock-db'
import mongodb from 'mongodb'

const MongoClient = mongodb.MongoClient
const url: string = process.env.DM_SONGS_LOCK__DB_URL!
const dbName = process.env.DM_SONGS_LOCL_DB_NAME
const client = new MongoClient(url, { useNewUrlParser: true })

export async function makeDb () {
  if (!client.isConnected()) {
    await client.connect()
  }
  return client.db(dbName)
}

const songsLockDb = makeSongsLockDb({ makeDb })
export default songsLockDb
