<script>
import { useSessionStore } from '@/stores/sessions';
import * as Api from '@/utils/apis';

export default {
    data() {
        return {
            titolo: '',
            descrizione: '',
            tipologia: '',
            voto: 1,
            num_like: 0,
            num_dislike: 0,
            film_id: 0,
            filmList: [],
            data: new Date().toISOString().slice(0,10),
            sessionStore: useSessionStore(),
            maxChar: 20,
            numChar: 0,
            votoStyle: {
                color:'black'
            }

        }
    },
    methods: {
        async getFilmList() {
            const data = await Api.getFilmList();
            this.filmList = data;
            this.titolo = this.filmList[0].titolo;
        },

        getFilmId() {
            this.filmList.forEach(film => {
                if (film.titolo === this.titolo) {
                    this.film_id = film.id;
                }
            })
        },
        async addReview() {
            this.getFilmId()
            const data = await Api.addReview(this.voto, this.descrizione, this.data, this.num_like, this.num_dislike, this.sessionStore.getUser(), this.film_id);
            if (data) {
                alert('Recensione aggiunta correttamente!');
                this.$router.push('/');
            } else {
                console.log(data);
                alert('Errore! Recensione non aggiunta!')
            }
        },

        checkLimiteDescrizione(){
            if(this.descrizione.length > this.maxChar){
                this.descrizione = this.descrizione.substring(0,this.maxChar);
            }
        },
        checkVoto(){
            if(this.voto < 1 || this.voto > 5){
                this.votoStyle.color = 'red';
                return true;
            }else {
                this.votoStyle.color = 'black';
                return false;
            }
        }
    },
    mounted() {
        this.getFilmList();
    },
    watch: {
        voto: {
            handler(){
                this.checkVoto();
            }
        }
    }

}
</script>

<template>
    <article>
        <div>
            <h1>Cineva - Nuova Recensione</h1>
        <form action="newreview" method = "POST">
            <label for="title">Titolo:</label>
            <select v-model="titolo">
                <option v-for="film in filmList" :key="film.id">{{ film.titolo }}</option>
            </select>
            <br>
            <label for="description">Descrizione:</label>
            <textarea id="description" name="description" v-model="descrizione" @input="checkLimiteDescrizione()"></textarea>
            <p id="caratteriRimanenti">Caratteri: {{ descrizione.length }}/20</p>
            <br>
            <label for="type">Tipo:</label>
            <label for="film">Film</label>
            <input type="radio" id="film" name="type" value="film" v-model="tipologia">
            <label for="serie">Serie TV</label>
            <input type="radio" id="serie" name="type" value="serie" v-model="tipologia">
            <br>
            <label for="rating">Voto:</label>
            <input id="votoRecensione" v-model="voto" type="number" name="voto" min="1" max="5" :style="votoStyle">
            <p v-if="checkVoto()">Il voto deve essere compreso tra 1 e 5!</p>
            <br>
            <input type="submit" value="Pubblica" @click.stop.prevent="addReview()">
        </form>
    </div>
    </article>
</template>
<style>
</style>