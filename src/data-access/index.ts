import makeSongsLockDb from './songs-lock-db'
import mongodb, { MongoError } from 'mongodb'
import mongoose from 'mongoose'
require('dotenv').config();

const MongoClient = mongodb.MongoClient
const url: string = process.env.DM_SONG_LOCK__DB_URL!
const client = new MongoClient(url, { useNewUrlParser: true })

let testDb: any;
export async function makeDb() {
  try {
    if (!client.isConnected()) {
      const conn = await mongoose.connect(url, {
        useNewUrlParser: true
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
