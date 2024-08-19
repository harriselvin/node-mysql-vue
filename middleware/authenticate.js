import { compare } from "bcrypt";
import { getUserDB } from "../model/fullstackDB.js";
import jwt from "jsonwebtoken";
import { config } from "dotenv";
config()

const checkUser = async (req, res, next) => {
    const {username, password} = req.body;
    let hashedPassword = (await getUserDB(username)).password
    
    let result = await compare(password, hashedPassword)
    if (result==true) {
        let token = jwt.sign({username: username}, process.env.SECRET_KEY, {expiresIn: '1h'})
        // console.log(token);

        req.body.token = token
        next()
        return
    } else {
        res.send('Invalid password')
    }
}

const verifyAToken = (req, res, next) => {
    let {cookie} = req.headers
    // checks if the token exists first
    let token = cookie && cookie.split('=')[1]

    // console.log(cookie);
    jwt.verify(token, process.env.SECRET_KEY, (err, decoded) => {
        if (err) {
            res.json({message: 'Token has expired'})
            return
        }
        req.body.user = decoded.username
        next()
    })
}

export { checkUser, verifyAToken }