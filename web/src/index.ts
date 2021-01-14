import { User } from './models/User';

const user = new User({  name: 'Bob', age: 34});

user.on('change', () => {
    console.log('user was changed');
});

user.trigger('change');