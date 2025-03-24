<script setup>
import Navbar from '../components/Navbar.vue'
import Header from '@/components/Header.vue';
import ReviewCard from '@/components/ReviewCard.vue';
import Footer from '@/components/Footer.vue';
</script>

<template>
    <Header></Header>
    <Navbar></Navbar>
  
  <div>
    <h2>Benvenuti in questo sito!</h2>
    <p id="intro">Su <a href="about.html"><i>Cineva</i></a> potete scrivere recensioni su <u>film e serie tv</u>
      e condividere i vostri pensieri con la <b>community</b>!</p>
  </div>
  
  <hr>
  <h2>Recensioni in evidenza</h2>
  <ReviewCard></ReviewCard>
  <ReviewCard></ReviewCard>
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
        <td><b>1</b></td>
        <td>Demi Moore</td>
        <td>1000</td>
      </tr>
      <tr>
        <td><b>2</b></td>
        <td>Andrew Garfield</td>
        <td>990</td>
      </tr>

      <tr>
        <td><b>3</b></td>
        <td>Emma Stone</td>
        <td>700</td>
      </tr>
      <tr>
        <td rowspan="2"><b>Altri</b></td>
        <td>Bradley Cooper</td>
        <td>750</td>
      </tr>
      <tr>
        <!-- <td><b>Altri</b></td> -->
        <td>Lady Gaga</td>
        <td>650</td>
      </tr>
    </table>

  </div>
  

  <Footer></Footer>
</template>



