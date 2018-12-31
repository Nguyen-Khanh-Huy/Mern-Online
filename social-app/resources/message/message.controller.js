import Message from './message.model';

export default {
    async getAll(req, res) {
        const message = await Message.find().populate('NguoiNhan', 'userName');
        res.json(message);
    },
    async create(req, res) {
        try {
          const { NguoiGui, NguoiNhan, messages } = req.body;
          const message = await Message.create({ NguoiGui, NguoiNhan, messages });
          res.json(message);
        } catch (err) {
          res.status(500).send(err);
        }
    }
}
