import mongoose from "mongoose";
import log4js from 'log4js'

log4js.configure({
    appenders: {
        miLoggerConsole: { type: 'console' },
    },
    categories: {
        default: { appenders: ['miLoggerConsole'], level: 'info' },
    }
})

let loggerConsole = log4js.getLogger()

const URL = 'mongodb+srv://julian:coder123@clasecoderatlas.strau.mongodb.net/DBusers?retryWrites=true&w=majority'

export const mongoConfig = mongoose.connect(URL,{useNewUrlParser:true,useUnifiedTopology:true},(err)=>{
    if(err) return console.log(err)
    loggerConsole.info('connected to DB')
})

