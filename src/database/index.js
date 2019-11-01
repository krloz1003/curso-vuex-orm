import { Database } from '@vuex-orm/core';

import User from '@/database/models/User';
import Post from '@/database/models/Post';
import Comment from '@/database/models/Comment';
import Auth from '@/database/models/Auth';

import users from '@/store/modules/users';
import posts from '@/store/modules/posts';
import comments from '@/store/modules/comments';

const database = new Database;

database.register(User, users);
database.register(Post, posts);
database.register(Comment, comments);
database.register(Auth, {});

export default database;