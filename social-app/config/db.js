import mongoose from 'mongoose';
import { config } from './config';

mongoose.Promise = global.Promise;

export const connect = () => {
    mongoose.connect(
        config.mongo,
        { useNewUrlParser: true }
    )
}

/*
export const userSchema = new mongoose.Schema({
    name: String,
    age: Number
})
export const Mod = mongoose.model('user', userSchema);

export const tim = () => {
    local.find().exec((err, users) => {
        console.log(users);
    })
}*/
//export const tim = () => {
//    local.find().exec((err, users) => {
//        console.log(users);
//    })
//}

//export const them = () => {
//    user.create({
//        name: "Huy",
//        age: 21
//    })
//}
//export

