import mongoose from 'mongoose';

const { Schema } = mongoose;

const messageSchema = new Schema({
    name: String,
    messages: String
});

export default mongoose.model('Message', messageSchema);
