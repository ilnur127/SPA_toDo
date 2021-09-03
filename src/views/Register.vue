<template>
    <form
        class="card auth-card"
        @submit.prevent="submitForm"
    >
        <div class="card-content">
            <span class="card-title">Test SPA</span>
            <div class="input-field">
                <label for="name">Name</label>
                <input
                    id="name"
                    type="text"
                    v-model="name"
                    :class="{invalidInput: errorName}"
                    @change="checkName"
                >
                <small v-if="errorName" class="helper-text invalid">Поле Name быть больше 3-ти символов. Сейчас оно {{name.length}}</small>
            </div>
            <div class="input-field">
                <label for="surname">Surname</label>
                <input
                    id="surname"
                    type="text"
                    v-model="surname"
                    :class="{invalidInput: errorSurname}"
                    @change="checkSurname"
                >
                <small v-if="errorSurname" class="helper-text invalid">Поле Surname быть больше 3-ти символов. Сейчас оно {{surname.length}}</small>
            </div>
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
                <label for="email">Rule</label>
                <select
                    v-model="rule"
                >
                  <option value="reader">User</option>
                  <option value="writer">Admin</option>
                </select>
            </div>
            <div class="input-field">
                <label for="password">Пароль</label>
                <input
                    id="password"
                    type="password"
                    class="validate"
                    v-model="password"
                    :class="{invalidInput: errorPassword}"
                    @input="checkPassword"
                >
                <small v-if="errorPassword" class="helper-text invalid">Пароль должен быть больше 6-ти символов. Сейчас он {{password.length}}</small>
            </div>
            <div class="input-field">
                <label for="dublPassword">Подтверждение пароля</label>
                <input
                    id="dublPassword"
                    type="password"
                    class="validate"
                    v-model="dublPassword"
                    :class="{invalidInput: errorDublPassword}"
                    @input="checkDublPassword"
                >
                <small v-if="errorDublPassword" class="helper-text invalid">Пароли не совпадают</small>
            </div>
        </div>
        <div class="card-action">
            <div>
                <button
                    class="btn waves-effect waves-light auth-submit"
                    type="submit"
                >
                    Зарегистрироваться
                    <i class="material-icons right">send</i>
                </button>
            </div>

            <p class="center">
                Уже есть аккаунт?
                <a href="/auth/sign-in">Войти!</a>
            </p>
        </div>
    </form>
</template>

<script>
export default {
  name: 'register',
  data: () => ({
    name: '',
    surname: '',
    email: '',
    rule: 'reader',
    password: '',
    dublPassword: '',
    errorName: false,
    errorSurname: false,
    errorEmail: false,
    errorPassword: false,
    errorDublPassword: false
  }),
  methods: {
    checkName () {
      if (this.name.length < 3) {
        this.errorName = true
      } else {
        this.errorName = false
      }
    },
    checkSurname () {
      if (this.surname.length < 3) {
        this.errorSurname = true
      } else {
        this.errorSurname = false
      }
    },
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
    checkDublPassword () {
      if (this.dublPassword !== this.password) {
        this.errorDublPassword = true
      } else {
        this.errorDublPassword = false
      }
    },
    async submitForm () {
      this.checkName()
      this.checkSurname()
      this.checkEmail()
      this.checkPassword()
      this.checkDublPassword()
      if (this.errorEmail || this.errorPassword || this.errorName || this.errorSurname || this.errorDublPassword) {
        return
      }
      const formData = {
        email: this.email,
        password: this.password,
        name: this.name,
        surname: this.surname,
        rule: this.rule
      }

      try {
        await this.$store.dispatch('register', formData)
        this.$router.push('/')
      } catch (e) {
        return false
      }
    }
  }
}
</script>

<style scoped>
.invalid {
    color:#f44336;
}
.invalidInput{
    border-bottom: 2px solid #f44336 !important;
}
</style>
