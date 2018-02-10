
import express from 'express'
import path from 'path'
const app = express()

app.use('/dist', express.static(path.join(__dirname, '../dist')))
app.use('/node_modules', express.static(path.join(__dirname, '../node_modules')))
app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, '../') + 'index.html')
})

app.listen(7001, () => {
    console.log('server is listening on port 7001')
})