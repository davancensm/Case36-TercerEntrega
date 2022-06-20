import {dirname} from 'path'
import { fileURLToPath } from 'url'
import multer from 'multer'

const __dirname = dirname(fileURLToPath(import.meta.url))

let storage = multer.diskStorage({
    destination: (req, file, cb)=>{
        cb(null, __dirname+'/../public/img')
    },
    filename: (req, file, cb)=>{
        cb(null,'profileImage'+file.originalname)
    }
})

export const uploader = multer({storage:storage})