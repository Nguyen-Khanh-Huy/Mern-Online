import mongoose from 'mongoose';

const { Schema } = mongoose;

const userSchema = new Schema({
    userName: String,
    fullName: String,
    email: String,
    password: String,
    socketid: String,
    role: Number,
    friends: [{ type: Schema.Types.ObjectId, ref: 'User' }],
    numberPhone: Number,
    home: String,
    living: String,
    birthDay: String,
    sex: String,
    religion: String,
    educationLevel: String,
    statuss: String
});

export default mongoose.model('User', userSchema);

