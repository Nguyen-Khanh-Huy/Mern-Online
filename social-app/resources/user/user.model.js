import mongoose from 'mongoose';

const { Schema } = mongoose;

const userSchema = new Schema({
    userName: String,
    fullName: String,
    email: String,
    password: String,
    friends: [{ type: Schema.Types.ObjectId, ref: 'User' }]
});

export default mongoose.model('User', userSchema);

