
<template>
  <div class="Création_Bloc">   
    <h1 class="Création_Bloc-Title"> &#60;&#61; Créations &#61;&#62;</h1>                     
    <div>
      <modale :revele="revele" :toggleModale="toggleModale"></modale>
      <button v-on:click="toggleModale" class="modal-btn">Curriculum Vitæ</button>
    </div>
    <img src="../assets/img/imgCV.jpg" class="Création_img" alt="Image du Cv" title="Cv">
    <div>
      <modale2 :revele="revele2" :toggleModale="toggleModale2"></modale2>
      <button v-on:click="toggleModale2" class="modal-btn2">Dynamisme d'un espace commentaire</button>
    </div>
    <img src="../assets/img/imgDynamismeJs.jpg" class="Création_img2" alt="Image d'un espace commentaire" title="Espace commentaire">
  </div>
</template>

<script>

import Modal_CV from "../components/Création_Components/Modal_CV.vue";
import Modal_DJS from "../components/Création_Components/Modal_DJS.vue";

export default {

  name: "Contenu",

  data() {
    return {
      revele: false,
      revele2: false,
    };
  },
  components: {
    modale: Modal_CV,
    modale2: Modal_DJS
    },
  methods: {
    toggleModale: function() {
      this.revele = !this.revele
    },
    toggleModale2: function() {
      this.revele2 = !this.revele2  
    },
  },

};

</script>

<style scoped>

.Création_Bloc {
	display: flex;
	flex-direction: column;
        justify-content: flex-start;
	position: relative;
	width: 100vw;
	z-index: 1;

}

.Création_Bloc-Title {
	font-family: 'Roboto Slab', serif;
        top: 39%;
        left: 32%;
        display: block;
	font-size: 3vh;
	position: absolute;
	z-index: 2;
}

.Création_img {
 	width: 100vw;
 	box-shadow: 0 0 10px var(--color-shadow);
 }

 .modal-btn {
  position: absolute;
  font-family: 'Handjet', cursive;
  font-weight: bold;
  font-size: 2vh;
  padding: 10px 14px;
  top: 25%;
  left: 30%;
  right: 30%;
  display: block;
  cursor: pointer;
  color: var(--color-text);
  box-shadow: -4px -4px 0px var(--color-relief);
  border-radius: 7px;
  z-index: 3;
  background-color: var(--color-button);
}

.modal-btn:hover {
 	box-shadow: 10px 10px 10px var(--color-shadow-variation);
}


.Création_img2 {
 	width: 100vw;
 	box-shadow: 0 0 10px var(--color-shadow);
}


.modal-btn2 {
  position: absolute;
  font-family: 'Handjet', cursive;
  font-weight: bold;
  font-size: 2vh;
  padding: 10px 14px;
  top: 70%;
  left: 30%;
  right: 30%;
  display: block;
  cursor: pointer;
  color: var(--color-text);
  box-shadow: -4px -4px 0px var(--color-relief);
  border-radius: 7px;
  z-index: 4;
  background-color: var(--color-button);
}

.modal-btn2:hover {
 	box-shadow: 10px 10px 10px var(--color-shadow-variation);
}

@media (min-width: 1000px){

.Création_Bloc {
	flex-direction: row;
}

.Création_Bloc-Title {
  top : 36%;
  left : 44%;
  display: block;
}

.Création_img {
 	width: 50vw;
 }

 .modal-btn {
  padding: 1vh 1vw;
  top: 35%;
  left: 15%;
  right: 70%;
}


.Création_img2 {
 	width: 50vw;
}


.modal-btn2 {
  padding: 1vh 1vw;
  top: 32%;
  left: 70%;
  right: 15%;
}

}

</style>
