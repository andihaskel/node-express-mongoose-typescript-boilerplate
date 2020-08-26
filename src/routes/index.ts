import express from 'express';
var router = express.Router();
import {postSong} from '../controllers';
import makeCallback from '../express-callback';
import hola2 from '../controllers';



router.get('/', makeCallback(postSong));

export default router;
