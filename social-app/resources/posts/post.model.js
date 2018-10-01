import mongoose from 'mongoose';
// import mongoosePaginate from 'mongoose-paginate';

const { Schema } = mongoose;

const postSchema = new Schema({
  content: String,
  imageUrl: String,
  likes: [{ type: Schema.Types.ObjectId, ref: 'User' }],
  postBy: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

// postSchema.plugin(mongoosePaginate);
export default mongoose.model('Post', postSchema);
