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
                        <template v-for="comment in comments"  >
                            {{ comment.comment }}
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
export default {
    name: "CommentListComponent",
    props: {
        comments: {
            type: Object,
            required: true
        }
    },
    data () {
        return {

        }
    }
}
</script>