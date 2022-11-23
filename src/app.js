const express = require('express');
const router = require('./tasks/users.routers')

const port = 9100;

const app = express()
app.use(express.json())

app.use(express.json())

app.use('/api/v1', router);

app.get('/', (req, res) => {
    res.status(200).json({message: "OK"})
})

app.listen(port, () => {
    console.log(`server conected ${port}`);
})