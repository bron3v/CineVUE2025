<script setup>
import Navbar from '../components/Navbar.vue'
import Header from '@/components/Header.vue';
import ReviewCard from '@/components/ReviewCard.vue';
</script>

<template>
    <Header></Header>
    <Navbar></Navbar>
  
  <h2>Benvenuti in questo sito!</h2>
  <p id="intro">Su <a href="about.html"><i>Cineva</i></a> potete scrivere recensioni su <u>film e serie tv</u>
      e condividere i vostri pensieri con la <b>community</b>!</p>

  <hr>
  <h2>Recensioni in evidenza</h2>
  <ReviewCard></ReviewCard>
  <ReviewCard></ReviewCard>
  
</template>



