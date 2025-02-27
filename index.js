const express = require("express"); 
const userroute = require("./routes/user")
const {connectMongodb} =  require('./connection') 

const app = express();
const PORT = 8001;

connectMongodb('mongodb://127.0.0.1:27017/project_0_1').then(()=>{
  console.log("mongodb connected");
})
 
app.use(express.urlencoded({ extended: false }));

 
app.use('/users', userroute);

app.listen(PORT, () => console.log('Server started on port', PORT));
