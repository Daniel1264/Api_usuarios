const express = require('express');
const router = require('./tasks/users.routers')

const port = 9000;

const app = express()
app.use(express.json())

app.use('/', router);

app.get('/', (req, res) => {
    res.json({message: "OK"})
})

app.listen(port, () => {
    console.log(`server conected ${port}`);
})