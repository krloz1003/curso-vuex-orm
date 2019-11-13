<template>   
    <div id=e3 style="width: 500px; max-width: 600px">
        <v-toolbar color="pink">
            <!--<v-toolbar-side-icon></v-toolbar-side-icon>-->
            <v-toolbar-title>Accede ahora</v-toolbar-title>
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
                                    text-button="Iniciar sesión"
                                    :registering="false"
                                    @processAuthForm="login"
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
    import Auth from '@/database/models/Auth'
    export default {
        name: 'LoginPage',
        components: {
            AuthFormComponent
        },
        methods: {
            login (user) {
                const exist = User
                    .query()
                    .where('email', user.email)
                    .where('password', user.password)
                    .first()
                if(exist) {
                    const auth = new Auth;
                    auth.$create({ data: { user_id: exist.id }})
                    setTimeout(() => {
                        this.$router.push('/blog')
                    }, 500)
                }
            }
        }
    }
</script>