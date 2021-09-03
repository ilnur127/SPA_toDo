<template>
    <form
        class="card"
        @submit.prevent="submitForm"
    >
        <div class="card-content">
            <span class="card-title">Test SPA</span>
            <div class="input-field">
                <label for="email">Email</label>
                <input
                    id="email"
                    type="text"
                    v-model="email"
                    :class="{invalidInput: errorEmail}"
                    @change="checkEmail"
                >
                <small v-if="errorEmail" class="helper-text invalid">Поле Email должно соответствовать типу anystring@anystring.anystring</small>
            </div>
            <div class="input-field">
                <label for="password">Пароль</label>
                <input
                    id="password"
                    type="password"
                    v-model="password"
                    :class="{invalidInput: errorPassword}"
                    @input="checkPassword"
                >
                <small v-if="errorPassword" class="helper-text invalid">Пароль должен быть больше 6-ти символов. Сейчас он {{password.length}}</small>
            </div>
        </div>
        <div style="color:red"><small>{{errorMessage}}</small></div>
        <div class="card-action">
            <div>
                <button
                    class="btn waves-effect waves-light auth-submit"
                    type="submit"
                >
                  Войти
                </button>
            </div>

            <p class="center">
                Нет аккаунта?
                <router-link to="/auth/sign-up" class="reg">Зарегистрироваться</router-link>
            </p>
        </div>
    </form>
</template>

<script>
export default {
  name: 'login',
  data: () => ({
    email: '',
    password: '',
    errorEmail: false,
    errorPassword: false,
    errorForm: true,
    errorMessage: ''
  }),
  methods: {
    checkEmail () {
      const re = /^[^\s@]+@[^\s@]+$/
      if (!re.test(this.email)) {
        this.errorEmail = true
      } else {
        this.errorEmail = false
      }
    },
    checkPassword () {
      if (this.password.length < 6) {
        this.errorPassword = true
      } else {
        this.errorPassword = false
      }
    },
    async submitForm () {
      this.checkEmail()
      this.checkPassword()
      if (this.errorEmail || this.errorPassword) {
        return
      }
      const formData = {
        email: this.email,
        password: this.password
      }
      try {
        const status = await this.$store.dispatch('login', formData)
        if (status.code) {
          this.errorMessage = 'Неправильный логин или пароль'
        } else {
          this.errorMessage = ''
        }
        this.$router.push('/')
      } catch {
        return false
      }
    }
  },
  mounted () {
  }
}
</script>

<style scoped>
.invalidInput{
    border-bottom: 2px solid #f44336 !important;
}
.grey {
  background-color: #757575 !important;
}
</style>
