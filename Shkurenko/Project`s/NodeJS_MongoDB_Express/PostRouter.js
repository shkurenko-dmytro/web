import Router from 'express'
import PostController from './PostController.js';
import path, { dirname } from "path"
import  fs from "fs"

const postRouter = new Router();

postRouter.post('/posts', PostController.create)
postRouter.get('/posts', PostController.getAll)
postRouter.get('/posts/:id', PostController.getOne)
postRouter.put('/posts', PostController.update)
postRouter.delete('/posts/:id', PostController.delete)

// router.get('/test/:id', PostController.getPageIndex)
// router.get('/testIndex', (req,res)=>{
//     //res.redirect('./testPage')
//     const dirname = path.resolve();
//     fs.readFile(path.resolve(dirname,'front', 'test', 'test.html'), 'utf-8',  (err, data) => {
//         if(err){
//             res.status(500).send("Error reading file");
//         } else{
//             res.send(data);
//         }
//     });
//     // const dirname = path.resolve();
//     // res.status(200).sendFile(path.resolve(dirname,'front', 'test', 'test.html'))

//     //res.redirect('./testPage')
//     //res.status(200).sendFile(path.resolve(dirname,'front', 'test', 'test.html'))
// });
// router.get('/testPage', (req,res) =>{
//     const dirname = path.resolve();
//     res.status(200).sendFile(path.resolve(dirname,'front', 'test', 'index.html'))
    
// })

// router.get('/test', PostController.getPageIndex)
// router.get('/testa', PostController.getPagea)



export default postRouter;
