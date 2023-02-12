const express = require("express")
const cors=require("cors");
// const bodyParser = require('body-parser');
const route = require('./routes/route.js');
const { default: mongoose } = require('mongoose');
const app = express();
app.use(cors())
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.json());
mongoose.set('strictQuery', true)
app.get('/',(req,res)=>{
    res.send("hello world!")
})


mongoose.connect("mongodb+srv://poushali26:0U8on2StHP5FNKo2@cluster0.jwwwcc8.mongodb.net/Sample-db?retryWrites=true&w=majority", {
    useNewUrlParser: true
})
.then( () => console.log("MongoDb is connected"))
.catch ( err => console.log(err) )

app.use('/', route);


app.listen(process.env.PORT || 3001, function () {
    console.log('Express app running on port ' + (process.env.PORT || 3001))
});