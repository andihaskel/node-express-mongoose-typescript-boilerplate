import makeSongsLockDb from './songs-lock-db'
import mongodb, { MongoError } from 'mongodb'
import mongoose from 'mongoose'

const MongoClient = mongodb.MongoClient
const url: string = process.env.DM_SONG_LOCK__DB_URL!
const dbName = process.env.DM_SONG_LOCK_DB_NAME
const client = new MongoClient("mongodb://localhost:27017/song-lock", { useNewUrlParser: true })

var testDb: any;
export async function makeDb() {
  try {
    if (!client.isConnected()) {
      const conn = await mongoose.connect("mongodb://localhost:27017/song-lock", {
        useNewUrlParser: true,
        useMongoClient: true
      });
      testDb = mongoose.connection;
    }
    return testDb;
  } catch (err) {
    console.error(err);
  }

}


const songsLockDb = makeSongsLockDb({ makeDb })

export default songsLockDb
