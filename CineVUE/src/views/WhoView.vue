<script setup>
import Navbar from '../components/Navbar.vue'
import Header from '@/components/Header.vue';
import AdminCard from '@/components/AdminCard.vue';
import Footer from '@/components/Footer.vue';
</script>

<template>
    <Header></Header>
    <Navbar></Navbar>
    
    <h1>Cineva - Chi siamo</h1>
    <div>
        <p>
            <b>Cineva</b> è un sito web che permette a tutti gli appassionati di cinema e serie tv di esprimere le proprie opinioni e condividerle con una community di appassionati.
        </p>
        <p>
            <b>Cineva</b> è stato fondato nel 2025 da Fabio Pili e Michele Faedda, i Tutor di Fondamenti di Programmazione Web del corso di Informatica dell'Università di Cagliari.
        </p>
    </div>
    <AdminCard></AdminCard>
    
    <Footer></Footer>
    
</template>



