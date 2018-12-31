import mongoose from 'mongoose';

const { Schema } = mongoose;

const messageSchema = new Schema({
    NguoiGui: { type: Schema.Types.ObjectId, ref: 'User'},
    NguoiNhan: { type: Schema.Types.ObjectId, ref: 'User'},
    messages: String,
    createdAt: {
        type: Date,
        default: Date.now
    }
});

export default mongoose.model('Messages', messageSchema);
