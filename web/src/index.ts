import { User } from './models/User'

const user = new User({name: 'Severin', age: 35});

user.on('change', () => {

});

user.on('click', () => {

});


console.log(user);