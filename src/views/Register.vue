<template>   
    <div id=e3 style="width: 500px; max-width: 600px">
        <v-toolbar color="pink">
            <!--<v-toolbar-side-icon></v-toolbar-side-icon>-->
            <v-toolbar-title>Regístrate ahora</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-icon>arrow-up-right</v-icon>
        </v-toolbar>
        <v-card>
            <v-container fluid grid-list-lg>
                <v-layout row wrap>
                    <v-flex xs12>
                        <v-card color="blue-grey darken-2" class="pa-4 white--text">
                            <v-card-title>
                                <div class="headline">Introduce tus datos</div>
                            </v-card-title>

                            <div>
                                <auth-form-component
                                    text-button="Registrarme"
                                    :registering="true"
                                    @processAuthForm="register"
                                >
                                </auth-form-component>
                            </div>
                            
                        </v-card>
                    </v-flex>
                </v-layout>
            </v-container>
        </v-card>
    </div>
</template>

<script>
    import AuthFormComponent from '../components/AuthFormComponent';
    import User from '@/database/models/User'

    export default {
        name: 'RegisterPage',
        components: {
            AuthFormComponent
        },
        methods: {
            register (user) {
                User.insert({
                    data: user
                })

                this.$updateBus.$emit('showSnackBar', {
                    show: true,
                    color: 'success',
                    text: 'cuenta creada correctamente',
                    icon: 'done'
                });

                setTimeout(() => {
                    this.$router.push('/login')
                }, 1000)
            }
        }
    }
</script>