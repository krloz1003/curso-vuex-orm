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
                            <comment-item-component @openModal="openModal" :comment="comment" :key="index" />
                            <v-divider></v-divider>
                        </template>

                        <modal-remove-comment-component
                            :show-modal="showModal"
                            v-if="showModal"
                            @closeModal="showModal = false"
                            @removeComment="removeComment"
                        ></modal-remove-comment-component>

                    </v-list>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
import Comment from '@/database/models/Comment'
import CommentItemComponent from '../components/CommentItem';
import ModalRemoveCommentComponent from '../components/ModalRemoveComment';
export default {
    name: "CommentListComponent",
    components: {
        CommentItemComponent,
        ModalRemoveCommentComponent
    },
    props: {
        comments: {
            type: Array,
            required: true
        }
    },
    data () {
        return {
            showModal: false,
            comment_id: null
        }
    },
    methods: {
        openModal (comment_id) {
            this.comment_id = comment_id;
            this.showModal = true;
        },
        removeComment () {
            Comment.delete(this.comment_id);
            this.$updateBus.$emit('refreshComments');
            this.showModal = false;
            this.comment_id = null;

        }
    }
}
</script>