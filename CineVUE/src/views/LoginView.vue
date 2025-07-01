<script>
import { useSessionStore} from '@/stores/sessions';
import * as Auth from '@/utils/auth.js'

export default {
    data() {
        return {
            username : '',
            password : ''
        }
    },
    methods: {
        async login(){
            console.log('Sono dentro login()!');
            const data = await Auth.login(this.username, this.password);

            if(data.userId) {
                useSessionStore().setUser(data.userId);
                console.log(useSessionStore().getUser());
                this.$router.push('/');
            }else{
                alert('Login Fallito!')
            }
        }
    }
}
</script>

<template>

    <div id="loginContent">
        <div id="loginForm">
            <img src="../assets/img/logo.png" alt="Logo" width="300" >
            <h1>Login</h1>
            <form action="login" method = "POST">
                <label for="username">Username</label>
                <input type="text" id="username" name="username" v-model="username">
                <label for="password">Password</label>
                <input type="password" id="password" name="password" v-model="password">
                <input type="submit" value="Accedi" @click.stop.prevent="login()">
            </form>
        </div>
    </div>
    
    
</template>

<style>

#loginContent {
    height: 600px;
    width: auto;
}

#loginForm {
    text-align: center;
    background: var(--primary);
    color: var(--white);

    position: absolute;
    top: 65%;
    left: 50%;

    padding: 20px;
    margin: 0;

    transform: translate(-50%, -50%);
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
}

#loginForm h1 {
    color: var(--white);
}

#loginForm input {
    display: block;
    width: 66%;
    margin-left: 16%;
    margin-top: 2%;
}

#loginForm input[type="submit"] {
    background: var(--white);
    color: var(--primary);
    font-weight: bold;
    cursor: pointer;
    
    padding: 10px;
    border: none;
    border-radius: 5px;
    margin-top: 20px;
    width: 68%;
}

#loginForm input[type="submit"]:hover {
    background: var(--tertiary);
    color: var(--white);
}

#loginForm label {
    font-weight: bold;
}
</style>