import {registerUser} from '../controllers';

/* GET users listing. */
export default function userRoutes(router: any, { makeCallback }: any) {
  router.get('/register', makeCallback(registerUser));
  
  router.get('/login', function (req: any, res: any, next: any) {
    res.send('respond with a resource');
  })
  
  router.get('/register', function (req: any, res: any, next: any) {

  }) 
}
