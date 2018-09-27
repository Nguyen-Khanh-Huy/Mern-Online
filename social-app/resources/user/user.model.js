import mongoose from 'mongoose';

const { Schema } = mongoose;

const userSchema = new Schema({
    userName: String,
    fullName: String,
    email: String,
    password: String,
    role: Number
});

export default mongoose.model('User', userSchema);

