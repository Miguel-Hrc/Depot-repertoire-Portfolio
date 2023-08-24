<script setup>
import Présentation from '../components/Présentation.vue'
import Création from '../components/Création.vue'
import Contact from '../components/Contact.vue'
</script>

<template>
  <div id="Présentation"></div><Présentation />
  <div id="Création"></div><Création />
  <div id="Contact"></div><Contact />
</template>

<style scoped>

template {
    width: 100vw;
}

#Création {
  margin-top: -12vh;
  position: absolute;
}

@media (min-width: 1000px) {

  #Création {
    margin-top: -16vh;
  }
  
}

</style>
