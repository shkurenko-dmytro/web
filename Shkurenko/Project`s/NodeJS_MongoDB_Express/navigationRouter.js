import Router from 'express'
import navigationController from './navigationController.js';
import path, { dirname } from "path"
import  fs from "fs"


const router = new Router();

router.get('/home', navigationController.getPageIndex)
router.get('/product', navigationController.getPageProduct)
router.get('/account', navigationController.getPageAccount)
router.get('/menu', navigationController.getPageMenu)
//router.get('/account/admin', navigationController.getPageAdmin)
//router.get('/account/profile', navigationController.getPageProfile)
export default router;