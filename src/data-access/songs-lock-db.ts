import cuid from "cuid"

export default function makeSongsLockDb ({ makeDb }: any) {
  return Object.freeze({
    findAll,
    findByHash,
    findById,
    insert,
    remove,
    update
  })
  async function findAll ({ publishedOnly = true } = {}) {
    const db = await makeDb()
    const result = await db.collection('songs').find()
    return (await result.toArray()).map(({ _id: id, ...found }: any) => ({
      id, 
      ...found
    }))
  }
  async function findById ({ id: _id }: any) {
    const db = await makeDb()
    const result = await db.collection('songs').find({ _id })
    const found = await result.toArray()
    if (found.length === 0) {
      return null
    }
    const { _id: id, ...info } = found[0]
    return { id, ...info }
  }
  async function insert ({ id: _id = cuid.slug(), ...songInfo }: any) {
    const db = await makeDb()
    const result = await db
      .collection('songs')
      .insertOne({ _id, ...songInfo })
    const { _id: id, ...insertedInfo } = result.ops[0]
    return { id, ...insertedInfo }
  }

  async function update ({ id: _id, ...songInfo }: any) {
    const db = await makeDb()
    const result = await db
      .collection('songs')
      .updateOne({ _id }, { $set: { ...songInfo } })
    return result.modifiedCount > 0 ? { id: _id, ...songInfo } : null
  }
  async function remove ({ id: _id }: any) {
    const db = await makeDb()
    const result = await db.collection('songs').deleteOne({ _id })
    return result.deletedCount
  }
  async function findByHash (song: any) {
    const db = await makeDb()
    const result = await db.collection('songs').find({ hash: song.hash })
    const found = await result.toArray()
    if (found.length === 0) {
      return null
    }
    const { _id: id, ...insertedInfo } = found[0]
    return { id, ...insertedInfo }
  }
}
