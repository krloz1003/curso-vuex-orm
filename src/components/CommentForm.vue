<template>
    <v-container fluid grid-list-md>
        <v-form ref="commentForm">
            <v-textarea
                name="comment"
                label="Escribe un comentario"
                v-model="newComment"
                :rules="newCommentRules"
            ></v-textarea>
            <v-btn @click="submit" color="success">Publicar comentario</v-btn>            
        </v-form>
    </v-container>
</template>

<script>
export default {
    name: 'CommentFormComponent',
    data() {
        return {
            newComment: '',
            newCommentRules: [
                v => !!v || 'El comentario es requerido',
                v => (v && v.length >= 10) || 'El comentarios es demasiado corto'
            ],
        }
    },
    methods: {
        submit () {
            if (this.$refs.commentForm.validate()) {
                this.$emit('saveComment', this.newComment);
                this.newComment = '';
            }
        }
    }
}
</script>