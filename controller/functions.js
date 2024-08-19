import { getUsersDB, getUserDB, addUserDB, removeUserDB, updateUserDB, getFruitsDB,getFruitDB, addFruitDB, removeFruitDB, updateFruitDB, addToCartDB } from "../model/fullstackDB.js";
import { hash } from 'bcrypt'

// USER INFO
const fetchUsers = async (req, res) => {
    res.json(await getUsersDB())
}

const fetchUser = async (req, res) => {
    res.json(await getUserDB(req.params.id))
}

const addUser = async (req, res) => {
    let {name, surname, age, fav_coding_lang, fav_car, eye_color, username, password} = req.body
    let hashedP = await hash(password, 10)

    await addUserDB(name, surname, age, fav_coding_lang, fav_car, eye_color, username, hashedP)
    res.send('Data was successfully inserted')
}

const removeUser = async (req, res) => {
    await removeUserDB(req.params.id)
    res.send('Data was successfully removed')
}

const updateUser = async (req, res) => {
    let {name, surname, age, coding_lang, car, eye_color} = req.body
    let user = await getUserDB(req.params.id)

    name ? name = name : name = user.name
    surname ? surname = surname : surname = user.surname
    age ? age = age : age = user.age
    coding_lang ? coding_lang = coding_lang : coding_lang = user.fav_coding_lang
    car ? car = car : car = user.fav_car
    eye_color ? eye_color = eye_color : eye_color = user.eye_color

    await updateUserDB(name, surname, age, coding_lang, car, eye_color, req.params.id)
    res.send('User info was successfully updated')
}

const loginUser = (req, res) => {
    res.json({
        message: 'You have signed in successfully!', 
        token: req.body.token
    })
}

// FRUIT INFO
const fetchFruits = async (req, res) => {
    res.json(await getFruitsDB())
}

const fetchFruit = async (req, res) => {
    res.json(await getFruitDB(req.params.id))
}

const addFruit = async (req, res) => {
    let {fruit_name, weight, amount} = req.body
    await addFruitDB(fruit_name, weight, amount)
    res.send('Fruit successfully inserted')
}

const removeFruit = async (req, res) => {
    await removeFruitDB(req.params.id)
    res.send('Fruit successfully removed')
}

const updateFruit = async (req, res) => {
    let {name, weight, amount} = req.body
    let fruit = await getFruitDB(req.params.id)

    name ? name = name : name = fruit.fruit_name
    weight ? weight = weight : weight = fruit.weight
    amount ? amount = amount : amount = fruit.amount

    await updateFruitDB(name, weight, amount, req.params.id)
    res.send('Fruit successfully updated')
}

// ADD TO CART INFO
const addToCart = async (req, res) => {
    console.log(req.body);
    let {id} = await getUserDB(req.body.user)
    console.log(id);
    
    // await addToCartDB(req.body.id, user_id)
    res.json({message: "Item successfully added to cart"})
}

export { fetchUsers, fetchUser, addUser, removeUser, updateUser, fetchFruits, fetchFruit, addFruit, removeFruit, updateFruit, loginUser, addToCart }