<template>
    <v-layout row justify-center>
        <v-dialog v-model="showModal" persintent max-width="300">
            <v-card>
                <v-card-title class="headline">¿Quieres eliminar el comentario?</v-card-title>
                <v-card-actions>
                    <v-spacer></v-spacer>

                    <v-btn color="pink darken-1" @click="$emit('closeModal')">No</v-btn>
                    <v-btn color="green darken-1" @click="$emit('removeComment')">Sí</v-btn>

                </v-card-actions>
            </v-card>
        </v-dialog>
    </v-layout>
</template>

<script>
export default {
    name: "ModalRemoveComponent",
    props: {
        showModal: {
            type: Boolean,
            default: false
        }

    }

}
</script>