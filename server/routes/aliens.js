const express = require('express')
const router = express.Router()
const Alien = require('../models/alien')


router.get('/', async(req,res) => 
{
    try
    {
           const aliens = await Alien.find()
           res.json(aliens)
    }
    catch(err)
    {
        res.send('Error ' + err)
    }
})

router.get('/:id', async(req,res) => 
{
    try
    {
           const alien = await Alien.findById(req.params.id)
           res.json(alien)
    }

catch(err)
{
        res.send('Error ' + err)
    }
})


router.post('/', async(req,res) => 
{
    const alien = new Alien
   ({
        rollno:req.body.rollno,
        name: req.body.name,
        section: req.body.section,
        pass: req.body.pass,
        credits: req.body.credits
    })

    try
   {
        const a1 =  await alien.save() 
        res.json(a1)
    }
catch(err)
   {
        res.send('Error')
    }
})

router.patch('/:id',async(req,res)=> 
{
    try
   {
        const alien = await Alien.findById(req.params.id) 
        alien.credits = req.body.credits
        const a1 = await alien.save()
        res.json(a1)   
    }
catch(err)
   {
        res.send('Error')
    }

})

router.delete('/', async(req,res) => 
    {
        try
        {
               const aliens = await Alien.deleteOne({name : req.body.name})
               res.json(aliens)
        }
        catch(err)
        {
            res.send('Error ' + err)
        }
    })
module.exports = router
