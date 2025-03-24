<script setup>
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
</script>

<template>
    <Header></Header>

    <h1>Cineva - Login</h1>
    <form action="login" method = "POST">
        <label for="ex_input">Esempio:</label>
        <input type="number" id="ex_input" name="ex_input" min="1" max="10">
        
        <!-- date
        <input type="date" id="ex_date" name="ex_date">
        -->

        <!-- checkbox 
        <input type="checkbox" id="ex_checkbox" name="ex_checkbox">
        -->

        <!-- radio 
        <input type="radio" id="ex_radio" name="ex_radio" value="1">
        <input type="radio" id="ex_radio" name="ex_radio" value="2"> 
        -->

        <!-- select
        <select id="rating" name="rating">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
        </select>
        -->
       
        <!--  <br> -->
        <label for="username">Username:</label>
        <input type="text" id="username" name="username">
        <label for="password">Password:</label>
        <input type="password" id="password" name="password">

        <input type="submit" value="Accedi">
    </form>
    <Footer></Footer>
    
</template>

<style>

</style>