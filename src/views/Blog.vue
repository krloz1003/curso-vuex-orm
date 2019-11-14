<template>
    <v-layout row wrap>
        <v-flex>
            <v-container fluid grid-list-md>
                <v-layout row wrap>
                    <v-flex v-bind="{ ['xs4']: true }" v-for="post in posts" :key="post.id">
                        post
                    </v-flex>
                </v-layout>
            </v-container>
        </v-flex>
    </v-layout>

</template>

<script>
import Post from '@/database/models/Post'

export default {
    name:'BlogPage',
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