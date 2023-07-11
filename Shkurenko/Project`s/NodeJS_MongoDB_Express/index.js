import  express  from "express";
import mongoose from "mongoose";
import router from "./router.js";
import cors from 'cors'
import fileUpload from "express-fileupload";
import authRouter from "./authRouter.js";

const PORT = 5000;

const DB_URL = 'mongodb+srv://user:pass@cluster0.ixu7ysd.mongodb.net/'

const app = express();
app.use(fileUpload({}))
app.use(cors())
app.use(express.json())
app.use(express.static('images'))
app.use('/api', router)
app.use('/auth', authRouter)





async function startApp(){
    try{
        await mongoose.connect(DB_URL)

        app.listen(PORT, () => {
        
            console.log(`Server started on port = ${PORT}`);
        })
    }
    catch(e){

    }

}
startApp();