// express
// cors
// mySql

const express = require('express')
const cors = require('cors')
const mysql = require('mysql2')

const app = express()
const PORT = 3300


app.use(cors())
app.use(express.json())

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'odiBau7!',
    database: 'db_kantor',
    port: 3306,
    multipleStatements: true
})

db.connect((err) => {
    if (err) {
        return console.error(`error: ${err.message}`)
        // console.log(`error`)
    }
    console.log(`Connected to MySql Server`)
})

// test Connection
app.get('/', (req, res) => {
    res.status(200).send('<h4> Integrated with SQL Expres</h4>')
})

// 

app.listen(PORT, () => { console.log(`API Running at : ${PORT}`) })