import mongoose from 'mongoose';

const { Schema } = mongoose;

const userSchema = new Schema({
    userName: String,
    fullName: String,
    email: String,
    password: String,
    socketid: String,
    role: Number,
    friends: [{ type: Schema.Types.ObjectId, ref: 'User' }]
});

export default mongoose.model('User', userSchema);

