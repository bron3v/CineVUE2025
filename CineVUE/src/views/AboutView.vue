<script setup>
import Navbar from '../components/Navbar.vue'
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
</script>

<template>
    <Header></Header>
    <Navbar></Navbar>
  <h1>Cosa è Cineva?</h1>
  <a href="/">Torna alla pagina iniziale</a>
  <div>
  <p id="indice">Indice</p>
    <ul>
      <li><a href="#info">Informazioni sul sito</a></li>
      <li><a href="#target">A chi è rivolto il sito?</a></li>
      <li><a href="#cost">Quanto costa?</a></li>
    </ul>
  </div>

  <div>
  <h3 id="info">Informazioni sul sito</h3>
    <p>Cineva permette a tutti i cinofili di esprirmere le prorpie opinioni su film e serie tv.
      <br>Meglio la CGI di <b>Black Widow</b> o quella di <b>Antman: Quantumania</b>?
      <br>Vi siete già ripresi dall'ultimo episodio di <u>Severance</u>?</p>
    <a href="#indice">Torna su</a>
  </div>
  
  <hr>
  
  <div>
    <h3 id="target">A chi è rivolto il sito?</h3>
    <p>Cineva è rivolto a tutti gli appassionati di cinema e serie tv che vogliono condividere le proprie opinioni con una community di appassionati.</p>
    <a href="#indice">Torna su</a>
  </div>
  
  <hr>
  
  <div>
    <h3 id="cost">Quanto costa?</h3>
    <p>Cineva è completamente gratuito e lo sarà per sempre.</p>
    <a href="#indice">Torna su</a>
  </div>
  
  <Footer></Footer>
</template>

<style>
</style>






