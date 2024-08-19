import { pool } from '../config/config.js'

// USER INFO
const getUsersDB = async () => {
    let [data] = await pool.query(`
        SELECT * FROM users
        `)
    return data
}

const getUserDB = async (username) => {
    let [[data]] = await pool.query(`
        SELECT * FROM users
        WHERE username = ?
        `, [username])
    return data
}

const addUserDB = async (name, surname, age, fav_coding_lang, fav_car, eye_color, username, password) => {
    await pool.query(`
        INSERT INTO users (name, surname, age, fav_coding_lang, fav_car, eye_color, username, password) 
        VALUES (?, ?, ?, ?, ?, ?, ? ,?)
        `, [name, surname, age, fav_coding_lang, fav_car, eye_color, username, password])
}

const removeUserDB = async (id) => {
    await pool.query(`
        DELETE FROM users
        WHERE id = ?
        `, [id])
}

const updateUserDB = async (name, surname, age, coding_lang, car, eye_color, id) => {
    await pool.query(`
        UPDATE users
        SET name = ?, 
        surname = ?, 
        age = ?, 
        fav_coding_lang = ?, 
        fav_car = ?,
        eye_color = ?
        WHERE id = ?
        `, [name, surname, age, coding_lang, car, eye_color, id])
}

// FRUIT INFO
const getFruitsDB = async () => {
    let [data] = await pool.query(`
        SELECT * FROM fruits
        `)
    return data
}

const getFruitDB = async (id) => {
    let [[data]] = await pool.query(`
        SELECT * FROM fruits
        WHERE id = ?
        `, [id])
    return data
}

const addFruitDB = async (name, weight, amount) => {
    await pool.query(`
        INSERT INTO fruits (fruit_name, weight, amount)
        VALUES(?, ?, ?)
        `, [name, weight, amount])
}

const removeFruitDB = async (id) => {
    await pool.query(`
        DELETE FROM fruits
        WHERE id = ?
        `, [id])
}

const updateFruitDB = async (name, weight, amount, id) => {
    await pool.query(`
        UPDATE fruits
        SET fruit_name = ?,
        weight = ?,
        amount = ?
        WHERE id = ?
        `, [name, weight, amount, id])
}

// ADD TO CART INFO
const addToCartDB = async (fruit_id, user_id) => {
    await pool.query(`
        INSERT INTO cart (fruit_id, user_id)
        VALUES (?, ?)
        `, [fruit_id, user_id])
}

export { getUsersDB, getUserDB, addUserDB, removeUserDB, updateUserDB, getFruitsDB, getFruitDB, addFruitDB, removeFruitDB, updateFruitDB, addToCartDB }