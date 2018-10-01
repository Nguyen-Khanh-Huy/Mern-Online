import Post from './post.model';
import { log } from 'core-js';

export default {
  async getAll(req, res) {
    const posts = await Post.find();
    res.json(posts);
  },
  async create(req, res) {
    try {
      const { content, imageUrl, likes, postBy } = req.body;
      const post = await Post.create({ content, imageUrl, likes, postBy });
      res.json(post);
    } catch (err) {
      res.status(500).send(err);
    }
  },
  async getById(req, res) {
    try {
      const post = await Post.findById(req.params.id)
        .populate('postBy', 'fullName') //userName
        .populate('likes', 'fullName'); //lastName
      if (!post) {
        return res.status(404).json({ err: 'could not find post' });
      }
      return res.json(post);
    } catch (err) {
      res.status(500).send(err);
    }
  },
  async updatePost(req, res) {
    try {
      const { id } = req.params;
      const post = await Post.findOneAndUpdate({ _id: id }, req.body, {
        new: true
      });
      if (!post) {
        return res.status(404).json({ err: 'could not find post' });
      }
      res.json(post);
    } catch (err) {
      res.status(500).send(err);
    }
  },
  async deletePost(req, res) {
    try {
      const { id } = req.params;
      const post = await Post.findOneAndRemove({ _id: id });
      if (!post) {
        return res.status(404).json({ err: 'could not find post' });
      }
      return res.json(post);
    } catch (err) {
      res.status(500).send(err);
    }
  }
};
