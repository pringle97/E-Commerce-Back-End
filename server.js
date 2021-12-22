const express = require('express')
const { Product, Category, Tag, ProductTag } = require('./models')
require('dotenv').config()
// import sequelize connection

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(require('./routes'))

// sync sequelize models to the database, then turn on the server
async function init() {
  await require('./config/connection.js').sync()
  app.listen(process.env.PORT || 3000)
}

init()