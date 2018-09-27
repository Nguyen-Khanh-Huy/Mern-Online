import Message from './message.model';

export default {
    async messager(req, res) {
        const { name, messages } = req.body;
        const message = await Message.create({ name, messages });
        res.send('oke message');
    }
}
