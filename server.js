const express=require("express")
const db=require("./db.js")
const jobsRoute =require('./routes/jobRoutes.js')
const userRoute= require('./routes/userRoute')

const app=express()

app.use(express.json())

app.use('/api/jobs/', jobsRoute)
app.use('/api/users/', userRoute)


const port=5000 || process.env.PORT;
app.listen(port, ()=> console.log("Server Started"));