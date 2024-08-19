<template>
    <div>
        <button @click="signUp = !signUp">Sign Up/Login</button>
    </div>
    <div class="sign-up" v-if="signUp">
        <div>
            <h1>Register</h1>
        </div>
        <table class="table-1">
            <tr>
                <th>
                    <label for="">
                        Name: 
                    </label>
                </th>
                <td>
                    <input type="text" v-model="name">
                </td>
            </tr>
            <tr>
                <th>
                    <label for="">
                        Surname: 
                    </label>
                </th>
                <td>
                    <input type="text" v-model="surname">
                </td>
            </tr>
            <tr>
                <th>
                    <label for="">
                        Age: 
                    </label>
                </th>
                <td>
                    <input type="text" v-model="age">
                </td>
            </tr>
            <tr>
                <th>
                    <label for="">
                        Favourite Coding Language: 
                    </label>
                </th>
                <td>
                    <input type="text" v-model="fav_coding_lang">
                </td>
            </tr>
            <tr>
                <th>
                    <label for="">
                        Favourite Car: 
                    </label>
                </th>
                <td>
                    <input type="text" v-model="fav_car">
                </td>
            </tr>
            <tr>
                <th>
                    <label for="">
                        Eye Colour: 
                    </label>
                </th>
                <td>
                    <input type="text" v-model="eye_color">
                </td>
            </tr>
            <tr>
                <th>
                    <label for="">
                        Username: 
                    </label>
                </th>
                <td>
                    <input type="text" v-model="username">
                </td>
            </tr>
            <tr>
                <th>
                    <label for="">
                        Password:
                    </label>
                </th>
                <td>
                    <input type="password" v-model="password">
                </td>
            </tr>
            <tr>
                <th colspan="2">
                    <div>
                        <button @click="addUser">Sign Up</button>
                    </div>
                </th>
            </tr>
        </table>
    </div>
    <div class="login" v-else>
        <div>
            <h1>Login</h1>
        </div>
        <table class="table-2">
            <tr>
                <th>
                    <label for="">
                        Username: 
                    </label>
                </th>
                <td>
                    <input type="text" v-model="loginUsername">
                </td>
            </tr>
            <tr>
                <th>
                    <label for="">
                        Password:
                    </label>
                </th>
                <td>
                    <input type="password" v-model="loginPassword">
                </td>
            </tr>
            <tr>
                <th colspan="2">
                    <div>
                        <button @click="loginUser">Login</button>
                    </div>
                </th>
            </tr>
        </table>
    </div>
</template>
<script>
export default {
    data() {
        return {
            name: '',
            surname: '',
            age: null,
            fav_coding_lang: '',
            fav_car: '',
            eye_color: '',
            username: '',
            password: '',
            loginUsername: '',
            loginPassword: '',
            signUp: true
        }
    },
    computed: {
        addUser() {
            this.$store.dispatch('addUser', this.$data)
        },
        loginUser() {
            this.$store.dispatch('loginUser', {username: this.loginUsername, password: this.loginPassword})
            location.reload()
        }
    }
}
</script>
<style>
    .sign-up {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .login {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
</style>