<template>
    <article>
      <div>
        <h2>Benvenuti in questo sito!</h2>
        <p id="intro">Su <a href="about.html"><i>Cineva</i>
        </a> potete scrivere recensioni su <u>film e serie tv</u>
          e condividere i vostri pensieri con la <b>community</b>!</p>
      </div>

      <hr>
      <div>
        <h2>Recensioni in evidenza</h2>
        <div v-for="review in reviews" :key="review.id">
          <ReviewCard :titolo="review.titolo" :commento="review.commento" :voto="review.voto" 
          :num_like="review.num_like" :num_dislike="review.num_dislike">
          </ReviewCard>
        </div>
      </div>

      <hr>
      <div>

        <h4>Classifica Attori più apprezzati</h4>

        <table>
          <tr>
            <!-- <th></th> -->
            <th colspan="2">Attore</th>
            <th>Voti</th>
          </tr>

          <tr>
            <td class="firstEl"><b>1</b></td>
            <td>Demi Moore</td>
            <td>1000</td>
          </tr>
          <tr>
            <td class="firstEl"><b>2</b></td>
            <td>Andrew Garfield</td>
            <td>990</td>
          </tr>

          <tr>
            <td class="firstEl"><b>3</b></td>
            <td>Emma Stone</td>
            <td>700</td>
          </tr>
          <tr>
            <td rowspan="2" class="firstEl leftCorner"><b>Altri</b></td>
            <td>Bradley Cooper</td>
            <td>750</td>
          </tr>
          <tr>
            <!-- <td><b>Altri</b></td> -->
            <td>Lady Gaga</td>
            <td class="rightCorner">650</td>
          </tr>
        </table>

      </div>

    </article>
</template>

<script>
import ReviewCard from '@/components/ReviewCard.vue';
import * as Api from '@/utils/apis.js'
  export default {
    components: {
      ReviewCard,
    },
    data(){
      return {
        reviews: []
      }
    },
    methods:{
      async getReviews(){
        const data = await Api.getReviews();
        this.reviews = data; 
        
      }
    },
      mounted(){
        this.getReviews();
      }
    }

</script>

<style>

table {
    width: 100%;
    border-collapse: collapse;
    margin-bottom: 20px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
    background: transparent;
    border-radius: 10px;
}

th {
    background-color: var(--primary);
    color: var(--white);
    padding: 10px;
}

th:first-child {
    border-top-left-radius: 10px;
}

th:last-child {
    border-top-right-radius: 10px;
}

td {
    padding: 10px;
    text-align: center;
}

td.firstEl {
    background-color: var(--primary);
    color: var(--white);
    font-weight: bold;
}

td.leftCorner {
    border-bottom-left-radius: 10px;
}

tr:nth-child(even){
    background-color: var(--secondary);
}

td.rightCorner {
    border-bottom-right-radius: 10px;
}

</style>


