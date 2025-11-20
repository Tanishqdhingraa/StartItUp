import mongoose from 'mongoose';
import bcrypt from 'bcryptjs'; // Import bcryptjs for hashing

// Define the salt work factor (how strong the hashing is)
const SALT_WORK_FACTOR = 10;

const SignupSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name is required'],
        trim: true,
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        unique: true,
        trim: true,
        lowercase: true,
    },
    password: {
        type: String,
        required: [true, 'Password is required'],
        minlength: [6, 'Password must be at least 6 characters long'],
    }
});


SignupSchema.pre('save', async function(next) {
    // Only hash the password if it has been modified (or is new)
    if (!this.isModified('password')) {
        return next();
    }

    try {
        // Generate a salt
        const salt = await bcrypt.genSalt(SALT_WORK_FACTOR);
        
        // Hash the password using the new salt
        this.password = await bcrypt.hash(this.password, salt);
        next();
    } catch (err) {
        next(err);
    }
});


export default mongoose.model("Signup", SignupSchema);