<script setup>
import Navbar from '../components/Navbar.vue'
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
</script>

<template>
    <Header></Header>
    <Navbar></Navbar>
    <article>
        <div>
            <h1>Cineva - Nuova Recensione</h1>
        <form action="newreview" method = "POST">
            <label for="title">Titolo:</label>
            <input type="text" id="title" name="title">
            <br>
            <label for="description">Descrizione:</label>
            <textarea id="description" name="description"></textarea>
            <br>
            <label for="type">Tipo:</label>
            <label for="film">Film</label>
            <input type="radio" id="film" name="type" value="film">
            <label for="serie">Serie TV</label>
            <input type="radio" id="serie" name="type" value="serie">
            <br>
            <label for="rating">Voto:</label>
            <select id="rating" name="rating">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
            </select>
            <br>
            <input type="submit" value="Pubblica">
        </form>
    </div>
    </article>
    
    
    <Footer></Footer>

</template>
<style>
</style>