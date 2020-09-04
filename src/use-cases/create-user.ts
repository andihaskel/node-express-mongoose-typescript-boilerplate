import makeUser from '../entities'

export default function makeCreateUser ({ usersDb }: any, bcryptjs: any) {
  return async function createUser (userInfo: any) {
    try{

      await bcryptjs.hash(userInfo.password, 1)
      const user: any = makeUser(userInfo);
      
      const exists = await usersDb.findById({ name: user.getId() })
      if (exists) {
        return exists
      }
  
      return usersDb.insert({
          id: user.getId(),
          name: user.getName(),
          password: user.getPassword(),
          email: user.getEmail()
      })
    } catch (e) {
      console.log(e)
    }
  }
}
