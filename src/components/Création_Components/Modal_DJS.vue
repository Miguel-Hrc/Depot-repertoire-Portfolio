<template>
  <div class="bloc-modale" v-if="revele">
    <div class="overlay" v-on:click="toggleModale"></div>

    <div class="modale">
                            <button v-on:click="toggleModale" class="close-modal">X</button>
                            <h1 id="modalTitle">Dynamisme d'un espace commentaire</h1>
                            <p id="dialogDesc">Création : <time datetime="2023-08-01">01 aout 2023</time>. <br>
                                                Technologie utilisés : VS code - Git Hub <br>
                                                Lien : <a href="https://github.com/Miguel-Hrc/Depot-repertoire-exercice-Javascript">https://github.com/Miguel-Hrc/Depot-repertoire-exercice-Javascript </a> <br>
                                                Description : De base un code html d'un formulaire, c'est le rendu d'un exercice où j'ai été en charge de m'occuper de la partie Javascript du projet afin de récupérer <br>
                                                les valeurs du formulaire pour en faire des commentaires avec des styles prédéfinis, à les ajouter la liste de commentaires déjà présents puis d'effacer les champs de formulaire</p>
                            <div class="imgDynamisme_Bloc">
                              <img src="../assets/img/imgDynamismeJs_ZoomComplément.jpg" class="imgDynamisme_Exemple" :class="{'active':isActive}" @click="toggleClassActive" alt="Image d'un espace commentaire après avoir remplis les champs de formulaire" title="Espace commentaire">
                              <img src="../assets/img/imgDynamismeJs_ZoomComplément2.jpg" class="imgDynamisme_Example2" :class="{'active':isActive2}" @click="toggleClassActive2" alt="Image d'un espace commentaire après avoir inséré des commentaires et vidé les champs de formulaire" title="Espace commentaire">
                            </div>
      </div>
  </div>
</template>


<script>

export default {

  name: "Modal_DJS",
  props: ["revele", "toggleModale"],

  data() {
    return {           
      isActive: false,
      isActive2: false
      };
    },
    methods: {
        toggleClassActive () {        
        this.isActive = !this.isActive;
        },
        toggleClassActive2 () {        
        this.isActive2 = !this.isActive2;
        },
      },
};

</script>


<style scoped>

.bloc-modale {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 6;
}

.overlay {
  background: var(--color-shadow);
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 7;
}

.modale {
  background: var(--vt-c-white);
  color: var(--color-heading);
  padding: 4%;
  margin: 4%;
  position: fixed;
  top: 17vh;
  z-index: 8;
}

.close-modal {
  padding: 8px 10px;
  border: none;
  border-radius: 5px;
  font-size: 2vh;
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
  background: #ff365e;
  color: #fff;
}

#modalTitle {
  font-family: Montserrat, sans-serif;
   font-size: 3vh;
}

#dialogDesc {
  line-height: 1.4;
  font-size: 2vh;
}

.imgDynamisme_Bloc {
	display: flex;
	flex-direction: row;
  justify-content: space-between;
}

.imgDynamisme_Exemple {
	height: 17vh;
}

.imgDynamisme_Example2 {
	height: 17vh;
}

.active {
	  height: auto;
    width: 90vw;
    position: fixed;
    top: 13vh;
    padding: 4%;
    margin: 4%;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 9;
}

@media (prefers-color-scheme: dark) {

  .modale {
  background: var(--color-div);
  }
  
}

@media (min-width: 500px) {

 .active {
    width: 80vw;
    margin: 6%;
  }
  
}

@media (min-width: 600px) {

 .active {
    width: 65vw;
    top: 13vh;
  }
  
}

@media (min-width: 700px) {

 .active {
    width: 55vw;
  }
  
}

@media (min-width: 800px) {

 .active {
    width: 45vw;
  }
  
}


@media (min-width: 1000px) {

 .active {
    width: 40vw;
  }
  
}

@media (min-width: 1200px) {

 .active {
    width: 30vw;
  }
  
}

@media (min-width: 1600px) {

 .active {
    width: 30vw;
    margin: 4%;
  }
  
}

@media (min-width: 2000px) {

 .active {
    width: 25vw;
    margin: 4%;
  }

}

</style>