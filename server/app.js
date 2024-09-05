const express = require('express')
const mongoose = require('mongoose')
const cors=require('cors')
const modelRouter = require('./routes/aliens')


//const url = 'mongodb://localhost:27017/cbit'
//const url = 'mongodb://127.0.0.1:27020,127.0.0.1:27021,127.0.0.1:27022/cbitit1?replicaSet=m101';
const url = 'mongodb+srv://sindhuchowhan437:160122737158@merncrud.u2q4j.mongodb.net/?retryWrites=true&w=majority&appName=merncrud';
const app = express()
mongoose.connect(url)
const con = mongoose.connection


con.on('open', () =>
{
console.log('connected...')
})
app.use(cors())
app.use(express.json())

app.use('/aliens',modelRouter)
app.listen(9000, () =>
{
console.log('Server started')
})