import  express  from "express";
import mongoose from "mongoose";
import router from "./router.js";
import cors from 'cors'
const PORT = 5000;

const DB_URL = 'mongodb+srv://user:pass@cluster0.ixu7ysd.mongodb.net/'

const app = express();
app.use(cors())
app.use(express.json())
app.use('/api', router)




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