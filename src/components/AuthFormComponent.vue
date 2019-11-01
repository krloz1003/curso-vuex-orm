<template>
    <v-form ref="form" v-model="valid" lazy-validation>
        <v-text-field
            v-model="name"
            :rules="nameRules"
            label="Nombre"
        ></v-text-field>
        <v-text-field
            v-model="email"
            :rules="emailRules"
            label="Email"
        ></v-text-field>
        <v-text-field
            v-model="password"
            :rules="passwordRules"
            label="Password"
            type="password"
            browser-autocomplete="new-password"
        ></v-text-field>                
    </v-form>
</template>

<script>
export default {
    name: 'AuthFormComponent',    
    data () {
        return {
            valid: false,
            name: '',
            nameRules: [
                v => !!v || 'El nombre es requerido',
                v => (v && v.length >= 2) || 'El nombre es demasiado corto'
            ],
            email: '',
            emailRules: [
                v => !!v || 'El email es requerido',
                v => /.+@.+/.test(v) || 'El formato del email no es correcto'
            ],
            password: '',
            passwordRules: [
                v => !!v || 'El password es requerido',
                v => (v && v.length >= 6) || 'El password debe tener 6 carácteres mínimo'
            ]
        }
        
    }
}
</script>