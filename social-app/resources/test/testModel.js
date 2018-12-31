import mongoose from 'mongoose';

const { Schema } = mongoose;

const testschema = new Schema({
    cmt: [{
        uid: String
    }]
});

export default mongoose.model('test', testschema);
