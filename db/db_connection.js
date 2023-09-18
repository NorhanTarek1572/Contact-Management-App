const mongoose = require('mongoose');

mongoose.connect( process.env.connection_string).then(()=>{
console.log("db connected" );
}).catch((err)=>{
console.log("erroe in open this db  : " + err)
})