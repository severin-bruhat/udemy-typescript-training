import { Model } from './Model';
import { Attributes } from './Attributes';
import { ApiSync } from './ApiSync';
import { Eventing } from './Eventing';


export interface UserProps {
    id?: number;
    name?: string; // ? -> optional
    age?: number;
}

const rootUrl = 'http://localhost:3000/users';

export class User extends Model<UserProps> {
    static buildUser(attrs: UserProps): User {
        return new User(
            new Attributes<UserProps>(attrs),
            new Eventing(),
            new ApiSync<UserProps>(rootUrl)
        );
    }
}


//BEFORE REFACTORING
// import axios, { AxiosResponse } from 'axios';

// interface UserProps {
//     id?: number;
//     name?: string; // ? -> optional
//     age?: number;
// }

// type Callback  = () => void;

// export class User {
//     events: { [key: string]: Callback[] } = {};
//     private baseUrl = 'http://localhost:3000/users';

//     constructor(private data: UserProps) {}

//     get(propName: string): (string | number) {
//         return this.data[propName];
//     }

//     set(update: UserProps): void {
//         Object.assign(this.data, update);
//     }

//     on(eventName: string, callback: Callback): void {
//         const handlers = this.events[eventName]  || [];
//         handlers.push(callback);
//         this.events[eventName] = handlers;  
//     }

//     trigger(eventName: string): void {
//         const handlers = this.events[eventName]  || [];

//         if(!handlers || handlers.length === 0) {
//             return;
//         }

//         handlers.forEach(callback => {
//             callback();
//         });
//     }

//     fetch(): void{
//         axios.get(`${this.baseUrl}/${this.get('id')}`)
//         .then((response: AxiosResponse): void => {
//             this.set(response.data);
//         })
//     }

//     save(): void {
//         const id = this.get('id');
//         if (id) {
//             axios.put(`${this.baseUrl}/${id}`, this.data);
//         } else {
//             axios.post(this.baseUrl, this.data);
//         }
//     }
// }