import express from 'express';
var router = express.Router();
import makeCallback from '../express-callback';
import userRoutes from './usersRoutes';
import songsRoutes from './songsRoutes';

userRoutes(router, { makeCallback });
songsRoutes(router, { makeCallback });

export default router;
