import express from "express";
import { cartServices } from "../DAOs/daos.js";

const router = express.Router()

const cartService = cartServices

router.post('/',(req,res)=>{
    cartService.new()
    .then(r=>res.send(r))
})

router.delete('/:id',(req,res)=>{
    let id = req.params.id
    cartService.delete(id)
    .then(r=>res.send(r))
})

router.get('/:id/products',(req,res)=>{
    let id = req.params.id
    cartService.get(id)
    .then(r=>res.send(r.payload ? r : r))
})

router.post('/:id/products',(req,res)=>{
    let id = req.params.id
    let idProd = req.body.id
    cartService.add(id,idProd)
    .then(r=>res.send(r))
})

router.delete('/:id/products/:idProd',(req,res)=>{
    let id = req.params.id
    let idProd = req.params.idProd
    cartService.deleteProd(id,idProd)
    .then(r=>res.send(r))
})

export default router