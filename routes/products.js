import express from "express";
import { productServices } from "../DAOs/daos.js";
import passport from 'passport'

const isUserLogged = (req,res,next)=> {
    if(req.isAuthenticated()) return next()
    res.redirect('/')
}

const router = express.Router();

const productService = productServices

let admin = true

const middleWare = (req,res,next) => {
    admin ? next() : res.send({status:'error',message:'only available as admin'})
}

router.get('/',isUserLogged,(req,res)=>{
    productService.get()
    .then(r=>res.render('home',{data:r.payload,user:req.session.passport.user}))
})

router.post('/',middleWare,(req,res)=>{
    let product = req.body
    productService.add(product)
    .then(r=>res.send(r))
})

router.get('/:id',(req,res)=>{
    let id = req.params.id
    productService.getById(id)
    .then(r=>res.send(r))
})

router.put('/:id',middleWare,(req,res)=>{
    let id = req.params.id
    let updatedProduct = req.body
    productService.update(id,updatedProduct)
    .then(r=>res.send(r))
})

router.delete('/:id',middleWare,(req,res)=>{
    let id = req.params.id
    productService.delete(id)
    .then(r=>res.send(r))
})

export default router