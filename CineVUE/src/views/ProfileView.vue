<script>
import { useSessionStore } from '@/stores/session';
import * as Auth from '@/utils/auth.js';

export default {
    data() {
        return {
            username: '',
            sessionStore: useSessionStore(),
        };
    },
    methods: {
        async logout(){
            await Auth.logout();
            this.sessionStore.setUser(null);
            this.$router.push('/');r('Logout failed:', error);
            
        },
        getUser() {
            this.username = this.sessionStore.getUser();
        },
    },
    mounted() {
        this.getUser();
    },
}
</script>

<template>
    <div class="profile-view">
        <h1>Profile</h1>
        <p>Benvenuto {{ username }}!</p>
        <button @click="logout">Logout</button>
    </div>
</template>