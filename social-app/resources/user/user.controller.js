import userServices from './user.services';
import User from './user.model';
import jwt from '../../helpers/jwt';

export default {
  async getFriends(req, res) {
    const users = await User.find({ _id: { $in: req.body.users } });
    res.json(users);
  },
  async signUp(req, res) {
    try {
      const { value, error } = userServices.validateSignUp(req.body);
      if (error) {
        return res.status(400).json(error);
      }
      const encryptPass = userServices.encryptPassword(value.password);
      const user = await User.create({
        email: value.email,
        userName: value.userName,
        fullName: value.fullName,
        password: encryptPass,
        socketid: value.socketid,
        role: value.role,
        friends: value.friends,
        numberPhone: value.numberPhone,
        home: value.home,
        living: value.living,
        birthDay: value.birthDay,
        sex: value.sex,
        religion: value.religion,
        educationLevel: value.educationLevel,
        statuss: value.statuss
      });
      res.json({ success: true });
    } catch (err) {
      console.error(err);
      res.status(500).send(err);
    }
  },
  async updateSocket(req, res) {
    try {
      const { id } = req.body;
      console.log(id);

      const user = await User.findOneAndUpdate({ _id: id }, req.body, {
        new: false
      });
      if (!user) {
        return res.status(404).json({ err: 'could not find user' });
      }
      res.json(user);
    } catch (err) {
      res.status(500).send(err);
    }
  },
  async login(req, res) {
    try {
      const { value, error } = userServices.validateLogin(req.body);
      if (error) {
        return res.status(400).json(error);
      }
      const user = await User.findOne({ email: value.email });
      if (!user) {
        return res.status(401).json({ err: 'unauthorized' });
      }
      const authenticated = userServices.comparePassword(
        value.password,
        user.password
      );
      if (!authenticated) {
        return res.status(401).json({ err: 'unauthorized' });
      }
      const token = jwt.issue({ id: user._id }, '1d'); //1 ngày ?
      return res.json({ user, token });
    } catch (err) {
      const token = jwt.issue({ id: user._id }, '1d');
      return res.json({ token });
    }
  },
  authenticate(req, res) {
    return res.json(req.user);
  }
};

//    bycriptjs   passport    passport-jwt   jsonwebtoken
