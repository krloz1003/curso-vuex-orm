<template>
    <v-container>
        <v-layout row wrap>
            <v-flex v-bind="{ ['x12']: true }" >
                <v-card>
                    <v-toolbar color="cyan" dark>  
                        <v-app-bar-nav-icon></v-app-bar-nav-icon>
                        <v-toolbar-title>Comentarios</v-toolbar-title>
                        <v-spacer></v-spacer>

                        <v-btn icon>
                            <v-icon>mdi-message-reply-text</v-icon>
                        </v-btn>
                    </v-toolbar>

                    <v-list two-line v-if="comments.length">
                        <template v-for="(comment, index) in comments"  >
                            <comment-item-component :comment="comment" :key="index" />
                            <v-divider></v-divider>
                        </template>
                    </v-list>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
import Comment from '@/database/models/Comment'
import CommentItemComponent from '../components/CommentItem';
export default {
    name: "CommentListComponent",
    components: {
        CommentItemComponent
    },
    props: {
        comments: {
            type: Array,
            required: true
        }
    },
    data () {
        return {

        }
    }
}
</script>