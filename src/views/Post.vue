<template>
    <v-layout row wrap>
        <v-flex v-if="post">
            <v-container fluid grid-list-md>
                <v-layout row wrap>
                    <v-flex v-bind="{ ['x12']: true }">
                        <post-component :post="post" :detail="true" />
                    </v-flex>
                </v-layout>
            </v-container> 
            
            <comment-form-component @saveComment="saveComment" />

            <comment-list-component :comments="post.comments"/>

        </v-flex>        
    </v-layout>
</template>

<script>
    import Post from '@/database/models/Post'
    import Auth from '@/database/models/Auth'
    import Comment from '@/database/models/Comment'
    import PostComponent from '../components/Post';
    import CommentFormComponent from '../components/CommentForm';
    import CommentListComponent from '../components/CommentList';

    export default {
        name: 'PostPage',
        components: {
            PostComponent,
            CommentFormComponent,
            CommentListComponent,
        },
        data() {
            return {
                post: null,
            }
        },
        mounted (){
            this.loadPost()
            this.$updateBus.$on('refreshComments', () => {
                this.loadPost();
            })
        },
        methods: {
            loadPost () {
                this.post = Post.query().with('comments.user').with('user').find(this.$route.params.id)
            },
            saveComment (comment ) {
                const auth = Auth.query().first();
                Comment.insert({
                    data: {
                        comment,
                        user_id: auth.user_id,
                        post_id: this.post.id
                    }
                });
                this.loadPost();
            }
        }
    }
</script>