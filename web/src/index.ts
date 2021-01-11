import { User } from './models/User';

const user = new User({ id: 1 });

user.set( { name: 'Sev', age: 35 });
user.save();

const newUser = new User({  name: 'Amelie', age: 12});
newUser.save();
newUser.events.on('change', () => {
    console.log('CHANGE');
});

newUser.events.trigger('change');