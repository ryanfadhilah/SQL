// express
// cors
// mySql

const express = require('express')
const cors = require('cors')
const mysql = require('mysql')

const app = express()
const PORT = 3300

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
    res.status(200).send('<h4> Integrated with SQL Expres</h4>')
})

app.listen(PORT, () => { console.log(`API Running at : ${PORT}`) })