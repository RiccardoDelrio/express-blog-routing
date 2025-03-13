const express = require('express');
const app = express();
const port = 3000

//Server in ascolto
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);

})
app.use(express.static('public'));

const postRouter = require('./routes/posts');
app.use('/api/posts', postRouter)