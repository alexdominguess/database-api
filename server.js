import express from 'express'
import {
    getAllHandler,
    getFilterDataHandler,
    dbWriteDataHandler,
    dbDeleteDataHandler
} from './controllers/dbControllers.js'

import dotenv from 'dotenv';
dotenv.config();

const app = express()
const port = process.env.PORT

app.use(express.json());

app.get('', (req, res) => { res.status(200).json({ status: 'Data base API is up and running' }) })
app.get('/api/db/get_all', getAllHandler)
app.post('/api/db/filter_data', getFilterDataHandler)
app.post('/api/db/write', dbWriteDataHandler)
app.delete('/api/db/delete', dbDeleteDataHandler)


app.listen(port, () => {
    console.log(`👉 Server running on port http://localhost:${port}`)
})