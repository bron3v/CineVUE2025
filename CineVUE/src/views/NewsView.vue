<script setup>
import Navbar from '../components/Navbar.vue'
import Header from '@/components/Header.vue';
import ReviewCard from '@/components/ReviewCard.vue';
import Footer from '@/components/Footer.vue';
</script>

<template>
    <Header></Header>
    <Navbar></Navbar>
  
    <article>
        <h1>Novità dal mondo del Cinema</h1>
    <ReviewCard></ReviewCard>
    <ReviewCard></ReviewCard>
    
    <br>
    <br>
    <hr>
    <hr>
    <br>
    <br>

    <h1>News meno recenti</h1>
    <ReviewCard></ReviewCard>
    <ReviewCard></ReviewCard>
    </article>
    
    
    <Footer></Footer>
</template>



