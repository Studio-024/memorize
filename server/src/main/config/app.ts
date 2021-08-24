import routes from '../routes/card'
import cors from 'cors'
import express from 'express'

const app = express()

app
    .use(express.json())
    .use(cors())

    // dont using setup routes into config 
    .use(routes)

app
    .get('/', (req, res) => res.json({uri: '/card'}))
    
    .get('*', (req ,res)=>  res.status(404).json({error: 'not Found'}))
    
export default app