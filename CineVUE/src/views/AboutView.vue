<script setup>
</script>

<template>
  <div class="col-12">
    <h1>Cosa è Cineva?</h1>
    <a href="/">Torna alla pagina iniziale</a>
  </div>
  
  <aside class="col-3"> 
    <p id="titoloIndice">Indice</p>
    <ul id="indice">
      <li><a href="#info">Informazioni sul sito</a></li>
      <li><a href="#target">A chi è rivolto il sito?</a></li>
      <li><a href="#cost">Quanto costa?</a></li>
    </ul>
  </aside>

  <article class="col-6">
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
  </article>

  <aside class="col-3 ads">
  </aside>
  
</template>

<style>
#titoloIndice {
  background: var(--primary);
  font-weight: bold;
  color: var(--white);
  font-size: 20px;
  
  padding: 15px 0px 15px 45px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  margin-bottom:0px;
}

#indice {
  list-style: none;
  background: var(--secondary);

  margin-top: 0px;
  padding: 0px 0px 20px 30px;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
}

#indice li {
  background: var(--white);

  margin-right: 30px;
  padding-top: 10px;
  padding-left: 15px;
}

#indice li>a {
  color: var(--primary);
}

#indice li:last-child {
  padding-bottom: 10px;
  margin-bottom: 10px;
  border-bottom-right-radius: 10px;
  border-bottom-left-radius: 10px;
}

.ads{
  background: var(--tertiary);
  
}
</style>






