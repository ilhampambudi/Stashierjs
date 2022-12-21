import express from "express"
import { isAuth, login, Register } from "../controllers/auth.js"
import {CreateProduct, getAllProducts, DeleteProduct} from "../controllers/product.js"

const router = express.Router()

router.post('/register', Register)

router.post('/login', login)

router.post('/private', isAuth)

router.get('/products', getAllProducts);

router.post('/createproduct', CreateProduct)

router.delete('/delete/:id', DeleteProduct);

router.post('/public', (req, res, next) => {
    res.status(200).json({message: 'nyoohhh!'})
})

router.use('/', (req, res, next) => {
    res.status(404).json({error: 'page gone!'})
})

export default router