import routes from '../routes/card'
import cors from 'cors'
import express from 'express'


const app = express()
app.use(express.json())
app.use(cors())

// dont using setup routes into config 
app.use(routes)


export default app
