const mongoose=require("mongoose")



const dbconnect=()=>{
      return mongoose.connect("mongodb+srv://deepakahlawat10:deepakahlawat10@cluster0.qkndiwa.mongodb.net/appavengers?retryWrites=true&w=majority)
}

module.exports=dbconnect
