const express  = require('express');
const app = express();
const path = require('path');

const PORT = 5000;
app.use(express.static( path.resolve (__dirname,'YourSneaker')))
//app.use(express.static('YourSneaker/less6'))

// app.get('/', (req, res) => {
//     res.sendFile(path.resolve(__dirname,'YourSneaker', 'index.html'))
// })
// app.get('/two', (req, res) => {
//     res.sendFile(path.resolve(__dirname,'YourSneaker','less6', 'index.html'))
// })
// app.get('/download', (req, res) => {
//     res.download(path.resolve(__dirname,'YourSneaker','a.txt'))
// })

app.listen(PORT,() => {
    console.log(`Server has been started on port ${PORT}...`);
})






