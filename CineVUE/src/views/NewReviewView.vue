<script>
import { useSessionStore } from '@/stores/session';
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
      data: new Date().toISOString().slice(0, 10),
      sessionStore: useSessionStore(),
      maxChar: 20,
      numChar: 0,
      votoStyle: {
        color: 'black'
      }
      
    }
  },
  methods: {
    async addReview() {
      this.getFilmId();
      const data = await Api.addReview(this.voto, 
      this.descrizione, this.data, this.num_like, 
      this.num_dislike, this.sessionStore.getUser(),
      this.film_id);
      if (data) {
        alert('Recensione aggiunta');
        this.$router.push('/');
      } else {
        console.log(data);
        alert('Errore');
      }
    },

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
      });
    }
  },
  mounted(){
    this.getFilmList()
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
            <br>
            <label for="description">Descrizione:</label>
            <textarea id="description" name="description" v-model="descrizione"></textarea>
            <br>
            <br>
            <label for="type">Tipo:</label>
            <label for="film">Film</label>
            <input type="radio" id="film" name="type" value="film" v-model="tipologia">
            <label for="serie">Serie TV</label>
            <input type="radio" id="serie" name="type" value="serie" v-model="tipologia">
            <br>
            <label for="rating">Voto:</label>
            <input id="votoRecensione" v-model="voto" type="number" name="voto" min="1" max="5"/>
            <br>
            <br>
            <input type="submit" value="Pubblica" @click.stop.prevent="addReview()">
        </form>
    </div>
    </article>
</template>

<style>
</style>