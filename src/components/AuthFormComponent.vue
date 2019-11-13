<template>
    <v-form ref="form" v-model="valid" lazy-validation>
        <v-text-field
            v-model="name"
            :rules="nameRules"
            label="Nombre"
            v-if="registering"
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
            autocomplete="new-password"
        ></v-text-field>
        <v-btn
            :disabled="!valid"
            color="success"
            @click="submit"
        >
            {{ textButton }}
        </v-btn>
        <v-btn
            color="error"
            @click="reset"
        >
            Limpiar formulario
        </v-btn>
    </v-form>
</template>

<script>
export default {
    name: 'AuthFormComponent',
    props : {
        textButton: {
            type: String,
            required: true
        },
        registering: {
            type: Boolean,
            required: true
        }
    },
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
        
    },
    methods: {
        submit () {
            if (this.$refs.form.validate() ) {
                this.$emit('processAuthForm', {
                    name: this.name,
                    email: this.email,
                    password: this.password
                })
            }
        },
        reset () {
            console.log('Limpiando el formulario');
            this.$refs.form.reset()
        }
    }
}
</script>