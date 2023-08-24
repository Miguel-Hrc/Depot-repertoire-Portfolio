<script setup>
  import { RouterLink, RouterView } from 'vue-router'
  import Footer from './components/Footer.vue'
</script>

<template>
  <header>
    <div>
      <a href="#Présentation"><h1 class="logo" title="Logo"> Mig's Portfolio</h1></a>
    </div>
    <div>
      <nav>
        <a href="#Présentation">Présentation</a>
        <a href="#Création">Création</a>
        <a href="#Contact">Contact</a>
      </nav>
    </div>
  </header>
  <RouterView />
  <footer>
    <div id="Footer"><Footer />
      <nav>
              <RouterLink to="/Page_inutile">&#60; Page inutile</RouterLink> 
              <RouterLink to="/Home">Home</RouterLink>  
              <RouterLink to="/Page_inutile">Page inutile &#62;</RouterLink>   
      </nav>
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
  z-index: 5;
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

nav a.router-link-exact-active {
  text-decoration: underline;
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
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
 padding-top: 2%;
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

