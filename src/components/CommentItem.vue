<template>
    <v-list-item>
        <v-list-item-avatar>
            <v-icon>mdi-account-box</v-icon>
        </v-list-item-avatar>

        <v-list-item-content>
            <v-list-item-title v-text="comment.comment"></v-list-item-title>
            <v-list-item-subtitle v-if="comment.user" v-text="comment.user.name" ></v-list-item-subtitle>
        </v-list-item-content>

        <v-list-item-action v-if="comment.isOwner($store.getters['entities/auth/find'](1).user_id)" >
          <v-btn icon @click="" >
            <v-icon color="red lighten-1">mdi-close</v-icon>
          </v-btn>
        </v-list-item-action>
    </v-list-item>
</template>

<script>
export default {
    name: "CommentItemComponent",
    props: {
        comment :{
            type: Object,
            required: true
        }
    }
}
</script>