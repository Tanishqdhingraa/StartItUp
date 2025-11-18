// models/Publisher.js
import mongoose from 'mongoose';

const publisherSchema = new mongoose.Schema({
  name: String,
  socialMedia: String,
  contentType: String,
  date: { type: Date, default: Date.now }
});

export default mongoose.model("Publisher", publisherSchema);
