const mongoose = require("mongoose");

const DB="mongodb+srv://archana:123archana@cluster0.ifyzlpu.mongodb.net/Mernstack?retryWrites=true&w=majority"

mongoose.connect(DB,{
	useNewUrlParser:true,
	useUnifiedTopology:true
}).then(()=> console.log("connection start")).catch((error)=> console.log(error.message))