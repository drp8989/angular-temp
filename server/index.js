const express =require('express')
const MongoClient = require('mongodb').MongoClient;
const mongoose = require('mongoose')
const config = require('./config/dev')
const FakeDb=require('./fake-db')
const rentalRoutes = require('./routes/rentals')


const app = express()
app.use('/api/v1/rentals',rentalRoutes);
const PORT =3001;
app.listen(PORT,function(){
    //   console.log("i am running");
});
mongoose.connect(config.DB_URI, {useNewUrlParser: true,useUnifiedTopology:true}).then(
    ()=>{
         const fakeDb = new FakeDb();
         fakeDb.seedDb();
    },
    (err)=>{
        console.error(err);
    });
const client = new MongoClient(config.DB_URI, { useNewUrlParser: true });
client.connect((err,client) => {
    if(err){
        console.error(err);
    }else{
    console.log('Connected');
    client.close();
    }
    // perform actions on the collection object
});