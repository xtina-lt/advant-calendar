const port = 8000
const express = require('express')
const app = express()

app.listen( port, () => console.log(`Party on port: ${port}`) )
