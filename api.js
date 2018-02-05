
require('dotenv').config()
const express = require ('express')
const app = express()
//const HTTPError = require('node-http-error')
const bodyParser = require('body-parser')
const port = process.env.PORT || 5000

app.get('/', (req, res) => res.send('meow')  )

app.listen(port, () => console.log("CATS!", port))

const cats = [
  {name: "Monster", age: 76, gender: "female", breed: "DontCare"},
  {name: "Pat", age:, 5, gender: "trans", breed: "NoMeImporta"},
]

app.get ('/cats', (req, res) => res.send(cats))
