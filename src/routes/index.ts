import express from 'express';
var router = express.Router();


router.get('/', function(req: any, res: any, next: any) {
    console.log('osk');
});

export default router;
