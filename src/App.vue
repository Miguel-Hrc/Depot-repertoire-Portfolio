<script setup>
  import { RouterLink, RouterView } from 'vue-router'
  import Footer from './components/Footer.vue'
</script>

<template>
  <header>
    <div>
      <h1 class="logo" title="Logo"> Mig's Portfolio</h1>
    </div>
    <div>
      <nav>
        <a href="#">Présentation</a>
        <a href="#">Création</a>
        <a href="#">Contact</a>
      </nav>
    </div>
  </header>
  <RouterView />
  <footer>
    <div id="Footer"><Footer />
    </div>
  </footer>
</template>

<style scoped>

header {
  line-height: 1.5;
  max-height: 100vh;
  padding: 1%;
  width: 100vw;
  background-color: var(--color-div);
  border-bottom: solid 1px var(--color-border);
  box-shadow: 0 0 10px var(--color-shadow);
  display: flex;
  justify-content: center;
  position: fixed;
}

.logo {
 font-size: 5vh;
 font-weight: bold;
 font-family: 'Dancing Script', cursive;
 text-align: center;
 margin-right: 2%;
}

nav {
  width: 100%;
  font-size: 2vh;
  text-align: center;
  margin-top: 3vh;
}

nav a {
  display: inline-block;
  padding: 0 1vw;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

.active {
  text-decoration: underline;
}

#Footer {
 background-color: var(--color-background-variation);
 bottom: 0;
 left: 0;
 right: 0;
 padding-top: 10%;
 width: 100vw;
}

@media (prefers-color-scheme: dark) {

    #Footer {
      color: var(--color-text-variation);
    }

    nav a {
      color: var(--color-text-variation);
    }
}

</style>

