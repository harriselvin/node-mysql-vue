import express from 'express'
import cors from 'cors'
import router from './routes/fullstackRouter.js'

const port = process.env.PORT || 4000
const app = express()

app.use(cors({
    origin: 'http://localhost:8080',
    credentials: true
}))

app.use(express.static('public'))
app.use(express.json())
app.use('/fullstack', router)

app.listen(port, () => {
    console.log('http://localhost:'+port);
})