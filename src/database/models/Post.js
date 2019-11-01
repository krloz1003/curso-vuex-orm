import { Model } from '@vuex-orm/core';
import User from './User';
import Comment from './Comment';

export default class Post extends Model {
    static entity = 'posts'

    static fields () {
        return {
            id: this.increment(),
            user_id: this.number(0),
            title: this.string(''),
            content: this.string('secret'),
            phone: this.number(123456789),
            user: this.belongsTo(User, 'user_id'),
            comments: this.hasMany(Comment, 'post_id')
        }
    }
}