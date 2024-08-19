import express from 'express'
import { fetchUsers, fetchUser, addUser, removeUser, updateUser, fetchFruits, fetchFruit, addFruit, removeFruit, updateFruit, loginUser, addToCart } from "../controller/functions.js";
import { checkUser } from '../middleware/authenticate.js';
import cors from 'cors'
import { verifyAToken } from '../middleware/authenticate.js';

const router = express.Router()

// USER ROUTES
router.get('/users', fetchUsers)
router.get('/users/:id', fetchUser)

router.post('/insert', addUser)
router.post('/login', checkUser, loginUser)
router.delete('/delete/:id', removeUser)

router.patch('/update/:id', updateUser)

// FRUIT ROUTES
router.get('/fruit', verifyAToken, fetchFruits)
router.get('/fruit/:id', fetchFruit)

router.post('/cart', verifyAToken, addToCart)
router.post('/add', addFruit)
router.delete('/remove/:id', removeFruit)

router.patch('/change/:id', updateFruit)

export default router