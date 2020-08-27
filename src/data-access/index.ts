import makeSongsLockDb from './songs-lock-db'
import mongodb, { MongoError } from 'mongodb'
import mongoose from 'mongoose'

const MongoClient = mongodb.MongoClient
const url: string = process.env.DM_SONG_LOCK__DB_URL!
const dbName = process.env.DM_SONG_LOCK_DB_NAME
const client = new MongoClient("mongodb://localhost:27017/song-lock", { useNewUrlParser: true })

const url2 = "mongodb://127.0.0.1:27017/song-lock?authSource=admin"
const obj = {
  db: 'mongodb://localhost:27017/song-lock',  
  port: 4202
}
export async function makeDb () {
  if (!client.isConnected()) {
    await client.connect()
  }
  return client.db(dbName)
}

// export async function makeDb () {
//   if (!client.isConnected()) {
//     mongoose.connect('mongodb://localhost:27017/song-lock', {useNewUrlParser:true, useUnifiedTopology: true})
//     .then(() =>{
//         console.log('[i] La conexión a la base de datos se ha realizado correctamente');
//     })
//     .catch(error => {
//         console.log('[!] No se ha podido realizar la conexión');
//     })
//   }
//   console.log(client.db(dbName));
//   // return client.db(dbName)
// }

const songsLockDb = makeSongsLockDb({ makeDb })

export default songsLockDb
