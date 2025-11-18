require('dotenv').config()
import express from ('express')
import mongoose from ('mongoose')

import app from express()
import port from process.env.PORT || 3000

import publisherRoutes from "./routes/publisherRoutes.js";
app.use("/publisher", publisherRoutes);


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
