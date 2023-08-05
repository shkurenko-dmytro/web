import Router from 'express'
import PostController from './PostController.js';
import path, { dirname } from "path"
import  fs from "fs"

const router = new Router();

router.post('/posts', PostController.create)
router.get('/posts', PostController.getAll)
router.get('/posts/:id', PostController.getOne)
router.put('/posts', PostController.update)
router.delete('/posts/:id', PostController.delete)

router.get('/test/:id', PostController.getPage)
router.get('/testIndex', (req,res)=>{
    //res.redirect('./testPage')
    const dirname = path.resolve();
    fs.readFile(path.resolve(dirname,'front', 'test', 'test.html'), 'utf-8',  (err, data) => {
        if(err){
            res.status(500).send("Error reading file");
        } else{
            res.send(data);
        }
    });
    // const dirname = path.resolve();
    // res.status(200).sendFile(path.resolve(dirname,'front', 'test', 'test.html'))

    //res.redirect('./testPage')
    //res.status(200).sendFile(path.resolve(dirname,'front', 'test', 'test.html'))
});
router.get('/testPage', (req,res) =>{
    const dirname = path.resolve();
    res.status(200).sendFile(path.resolve(dirname,'front', 'test', 'index.html'))
    
})

router.get('/test', PostController.getPage)
router.get('/testa', PostController.getPagea)



export default router;
