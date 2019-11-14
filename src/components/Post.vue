<template>
    <v-card color="indigo darken-4">
        <v-img src="https://picsum.photos/id/11/500/300" aspect-ration="2.75" ></v-img>
        <v-card-title primary-title>
            <div>
                <div class="headline">{{ post.title }}</div>
                <span class="white--text" v-if="post.user">
                    <v-icon>mdi-clipboard-account</v-icon>
                    {{ post.user.name }}
                </span>
                <v-spacer v-if="detail"><br></v-spacer>
                <span class="white--text" v-if="detail">{{ post.content }}</span>
            </div>
        </v-card-title>

        <v-card-actions>
            <v-spacer></v-spacer>
            <v-badge color="red" left>
                <span slot="badge">{{ post.comments.length }}</span>
                <v-icon large color="white">mdi-message-reply-text</v-icon>
            </v-badge>

            <v-btn v-if="!detail" @click="$router.push({name: 'post-detail', params: {id: post.id }})" icon>
                <v-icon>mdi-arrow-right</v-icon>

            </v-btn>


        </v-card-actions>

    </v-card>
</template>   

<script>
export default {
    name: "PostComponent",
    props: {
        post: {
            type: Object,
            required: true
        },
        detail: {
            type: Boolean,
            default: false
        }
    },

}
</script>