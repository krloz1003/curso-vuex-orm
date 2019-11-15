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

        </v-flex>        
    </v-layout>
</template>

<script>
    import Post from '@/database/models/Post'
    import PostComponent from '../components/Post';
    import CommentFormComponent from '../components/CommentForm';

    export default {
        name: 'PostPage',
        components: {
            PostComponent,
            CommentFormComponent
        },
        data() {
            return {
                post: null,
            }
        },
        mounted (){
            this.loadPost()
        },
        methods: {
            loadPost () {
                this.post = Post.query().with('comments.user').with('user').find(this.$route.params.id)
            },
            saveComment (comment ) {
                console.log(comment)
            }
        }
    }
</script>