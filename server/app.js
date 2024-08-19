const express = require('express')
const mongoose = require('mongoose')
//const cors=require('cors')
const modelRouter = require('./routes/aliens')


const url = 'mongodb://localhost:27017/cbit'
const app = express()
mongoose.connect(url)
const con = mongoose.connection


con.on('open', () =>
{
console.log('connected...')
})
//app.use(cors())
app.use(express.json())

app.use('/controller',modelRouter)
app.listen(9000, () =>
{
console.log('Server started')
})