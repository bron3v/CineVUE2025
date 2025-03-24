<script>
import { RouterLink } from 'vue-router'
</script>

<template>
    <nav>
      <ul>
          <li><RouterLink to="/">Home</RouterLink></li>
          <li><RouterLink to="/about">About</RouterLink></li>
          <li><RouterLink to="/contacts">Contatti</RouterLink></li>
          <li><RouterLink to="/news">News</RouterLink></li>
          <li><RouterLink to="/who">Chi siamo</RouterLink></li>
      </ul>
  </nav>
</template>

<style>
nav li {
  list-style-type: none;
}
nav li > a {
  color: var(--black)
}

a:link {
  text-decoration: none;
  font-size: 20px;
}

a:hover {
  font-weight: bold;
  color: var(--primary);
}
</style>


