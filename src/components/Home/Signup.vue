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
                  <!-- <v-card dark class="info">
                        <h2>
                          Sign Up
                        </h2>
                  </v-card> -->
                  <v-card-text >
                    <v-container>
                        <form @submit.prevent="onSignup" >
                            <v-layout row>
                                <v-flex xs12>
                                    <v-text-field
                                    name="name"
                                    label="Name"
                                    id="name"
                                    v-model="name"
                                    type="text"
                                    required
                                    >
                                    </v-text-field>
                                </v-flex>
                            </v-layout>
                            <v-layout row>
                                <v-flex xs12>
                                    <v-text-field
                                    label="Email"
                                    v-model="email"
                                    id="email"
                                    type="email"
                                    required
                                    >
                                    </v-text-field>
                                </v-flex>
                            </v-layout>
                            <v-layout row>
                                <v-flex xs12>
                                    <v-text-field
                                    label="Password"
                                    v-model="password"
                                    id="password"
                                    type="password"
                                    required
                                    >
                                    </v-text-field>
                                </v-flex>
                            </v-layout>
                            <v-layout row>
                                <v-flex xs12>
                                    <v-text-field
                                    name="confirmPasswords"
                                    label="Confirm Password"
                                    id="confirmPasswords"
                                    v-model="confirmPasswords"
                                    type="password"
                                    :rules="[comparePasswords]">
                                    </v-text-field>
                                </v-flex>
                            </v-layout>
                            <v-layout row>
                                <v-flex xs12>
                                    <v-card-text>
                                        <v-radio-group v-model="gender" row>
                                            <v-radio 
                                            label="Male" 
                                            value="Male"
                                            color="indigo" ></v-radio>
                                            <v-radio 
                                            label="Female" 
                                            value="Female"
                                            color="pink"></v-radio>
                                        </v-radio-group>
                                    </v-card-text>
                                </v-flex>
                            </v-layout>
                            <v-layout row justify-center>
                                <v-flex xs12>
                                    <v-card-text>
                                        Date of Birth
                                    </v-card-text>
                                </v-flex>
                            </v-layout>
                            <v-layout row  mb-3 >
                                <v-flex xs12>
                                    <v-date-picker color="blue" first-day-of-week="1" v-model="dob"></v-date-picker>
                                </v-flex>
                            </v-layout>
                            <v-layout row>
                                <v-flex xs12 class="text-xs-center">
                                    <v-btn large type="submit"  color="info" :disabled="loading" :loading="loading">
                                        Sign up
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
            name: '',
            email: '',
            password: '',
            confirmPasswords: '',
            gender: '',
            dob: '',
            menu: false,
      }
  },
  computed: {
      comparePasswords () {
          return this.password !== this.confirmPasswords ? 'Passwords do not match' : ''
      },
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
      user (value) {
          if (value !== null && value !== undefined) {
              this.$router.push('/events')
          }
      }
  },
  methods: {
      onSignup () {
          const userData = {
                name: this.name,
                email: this.email,
                password: this.password,
                gender: this.gender,
                dob: this.dob
            }
          this.$store.dispatch('signUserUp', userData)
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

