const app=require('./app')
const mongoose=require('mongoose');

const CONNECTION_URL='mongodb://127.0.0.1:27017';
const PORT=5000;
mongoose.connect(CONNECTION_URL,{ useNewUrlParser: true })
.then(()=>{
    app.listen(PORT,()=>{
        console.log("Database connected successfully")
        console.log(`Server running at PORT ${PORT}`)
    })
})
.catch(err=>{
    console.log(err.message)
})