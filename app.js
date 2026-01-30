const express = require('express'); //importo express
const app = express(); //inizializzo express 
const port = 3000 //porta del server

//Server in ascolto
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);

})
app.use(express.static('public'));

const postRouter = require('./routes/posts');
app.use('/api/posts', postRouter)