 const express = require('express')
 const serverLess = require('serverless-http')



const app = express();


const router = express.Router();

router.get('/',(req, res) => {

    res.json("f3f43f");
    
})
app.use('/.netlify/functions/api', router)
module.exports.handler = serverLess(app)