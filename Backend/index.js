require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')

const app = express()
const port = process.env.PORT || 3000

app.use(express.json())

app.get('/', (req, res) => {
  res.send('Hello World!')
})

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB connected successfully"))
  .catch(err => console.error("❌ MongoDB connection failed:", err))

app.listen(port, () => {
  console.log(`🚀 Server running at http://localhost:${port}`)
})
