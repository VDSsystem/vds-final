import express from 'express'
import router from './app/router.js'
import morgan from 'morgan'
import mongoose from "mongoose";

//port number
const port = 3000
const app = express()
mongoose.connect('mongodb+srv://vdssystem0:VA123AVdkd@cluster0.vdo3rvu.mongodb.net/test?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('MongoDB connected successfully');
    // Your code here
  })
  .catch((err) => console.error(err));


//two types [dynamic , static]
app.use(express.static('public'))
//a middleware
app.use(morgan('dev'))
app.use(express.json())
app.use('/api', router)

//CRUD operations on
app.listen(port, () => {
    console.log(`Server started @http://localhost:${port}`)
})

//single purpose
//separation of concerns [design pattern]

//repository : the only class allowed to talk to our data
//service : the only class that can communicate with the repo
//router : responsible for handling all the routing
//app for server configurations

