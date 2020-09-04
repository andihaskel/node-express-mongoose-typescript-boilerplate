import {postSong} from '../controllers';

/* GET users listing. */
export default function songsRoutes(router: any, {makeCallback}: any) {
    router.get('/', makeCallback(postSong));
}
