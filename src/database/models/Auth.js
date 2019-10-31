import { Model } from '@vuex-orm/core';
import User from './User';

export default class Auth extends Model {
    static entity = 'auth'

    static fields () {
        return {
            user_id: this.number(0),
            posts: this.hasMany(User, 'user_id')
        }
    }
}