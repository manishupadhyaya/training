//Libraries
const express = require('express')
const mongoose = require('mongoose')
//Models
const Wishes = require('./models/wishes')

//App.use
const app = express()
app.use(express.json())

//DB
const {url} = require('./config/db.config')
mongoose.Promise = global.Promise
mongoose.connect(url, {useNewUrlParser:true})
.then(()=>{
    console.log("Connected to MongoDB database")
})
.catch(err=>{
    console.log('Cannot connect to the database', err)
    process.exit()
})

//Get Requests
app.get('/wishes',(req,res,next)=>{
    Wishes.find({}, (err, docs)=>{
        if(err){
            res.send("Error in getting the data",err)
        }
        console.log("Feetchhhhhhing")
        res.send(docs)
    })
})

//Post Requests
app.post('/wishes', (req,res,next)=>{
    console.log("Body", req.body)
  const wish = new Wishes(req.body)
  wish.save((err)=>{
      if(err){
          res.status(400).send("Error saving data")
      }
      else{
          res.status(200).send("Successfully saved the data")
      }
  })
})

//Listening for requests
app.listen(8000, ()=>{
    console.log("Application is connected to port 8000")
})