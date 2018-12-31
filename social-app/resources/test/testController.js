import test from './testModel';

export default {
    async create(req, res) {
        try {
          const { cmt } = req.body;
          const message = await test.create({ cmt });
          res.json(message);
        } catch (err) {
          res.status(500).send(err);
        }
    }
}
