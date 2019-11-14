<template>
    <v-layout row wrap>
        <v-flex>
            <v-container fluid grid-list-md>
                <v-layout row wrap>
                    <v-flex v-bind="{ ['xs4']: true }" v-for="post in posts" :key="post.id">
                        <post-component :post="post" />
                    </v-flex>
                </v-layout>
            </v-container>
        </v-flex>
    </v-layout>

</template>

<script>
import Post from '@/database/models/Post'
import PostComponent from '../components/Post';

export default {
    name:'BlogPage',
    components: {
        PostComponent
    },
    data () {
        return {
            posts: []
        }
    },
    mounted () {
        this.posts = Post.query().with('comments|user').all()
    }
}
</script>