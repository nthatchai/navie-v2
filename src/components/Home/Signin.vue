<template>
  <v-container mt-4>
      <v-layout row v-if="error">
        <v-flex xs12 sm6 md4 offset-sm4 >
            <app-alert @dismissed="onDismissed" :text="error.message"></app-alert>
        </v-flex>
      </v-layout>
      <v-layout row wrap align-center>
          <v-flex xs12 sm6 md4 offset-sm4 class="text-xs-center">
              <v-card>
                  <v-card-text >
                    <v-container>
                        <form @submit.prevent="onSignin" >
                            <v-layout row>
                                <v-flex xs12>
                                    <v-text-field
                                    name="email"
                                    label="Email"
                                    id="email"
                                    v-model="email"
                                    type="email"
                                    
                                    >
                                    </v-text-field>
                                </v-flex>
                            </v-layout>
                            <v-layout row>
                                <v-flex xs12>
                                    <v-text-field
                                    name="password"
                                    label="Password"
                                    id="password"
                                    v-model="password"
                                    type="password"
                                    
                                    >
                                    </v-text-field>
                                </v-flex>
                            </v-layout>
                            <v-layout row>
                                <v-flex xs12 class="text-xs-center">
                                    <v-btn large type="submit"  color="info" :disabled="loading" :loading="loading">
                                        Sign in
                                        <span slot="loader" class="custom-loader">
                                        <v-icon light>cached</v-icon>
                                        </span>
                                    </v-btn>
                                </v-flex>
                            </v-layout>                      
                        </form>
                    </v-container>
                  </v-card-text>
              </v-card>
          </v-flex>
      </v-layout>
  </v-container>
</template>

<script>
import Alert from './../Shared/Alert.vue'

export default {
  data () {
      return {
          email: '',
          password: ''
      }
  },
  computed: {
      user () {
          return this.$store.getters.user
      },
      error () {
          return this.$store.getters.error
      },
      loading () {
          return this.$store.getters.loading
      }
  },
  watch: {
    //   user (value) {
    //       if (value !== null && value !== undefined) {
    //           this.$router.push('/events')
    //       }
    //   }
  },
  methods: {
      onSignin () {
          this.$store.dispatch('signUserIn', {email: this.email, password: this.password})
      },
      onDismissed () {
          console.log('Dissmiss Alert!')
          this.$store.dispatch('clearError')
      }
  },
    components: {
      appAlert:Alert
    }
}
</script>

<style scoped>
  .custom-loader {
    animation: loader 1s infinite;
    display: flex;
  }
  @-moz-keyframes loader {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
  @-webkit-keyframes loader {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
  @-o-keyframes loader {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
  @keyframes loader {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
</style>
