const app=require('./app')
const mongoose=require('mongoose');

const CONNECTION_URL='mongodb+srv://admin:admin@cluster0.fsuebpj.mongodb.net/?retryWrites=true&w=majority';
const PORT=5000 || process.env.PORT;
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
