<template>
  <div class="bloc-modale" v-if="revele">
    <div class="overlay" v-on:click="toggleModale"></div>

    <div class="modale">
                            <button v-on:click="toggleModale" class="close-modal">X</button>
                            <h1 id="modalTitle">Curriculum Vitæ</h1>
                            <p id="dialogDesc">Création : <time datetime="2023-06-29">29 juin 2023</time>. <br>
                                               Technologie utilisés : VS code - Git Hub <br>
                                               Lien : <a href="https://github.com/Miguel-Hrc/Depot-repertoire-exercice">https://github.com/Miguel-Hrc/Depot-repertoire-exercice </a> <br>
                                               Description : Curriculum Vitæ codé avec du HTML et du CSS avec quelques animations, c'est une reproduction d'un cv réalisé par un de mes professeurs</p>                 
                            <img src="../assets/img/imgCV_Zoom.jpg" class="img_Cv" :class="{'active':isActive}" @click="toggleClassActive" alt="Image du Cv" title="Cv">
    </div>
  </div>
</template>


<script>
export default {
  
  name: "Modal_CV",
  props: ["revele", "toggleModale"],

 data() {
    return {           
      isActive: false
    };
   },
    methods: {
        toggleClassActive () {        
        this.isActive = !this.isActive;
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
  top: 20vh;
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

.img_Cv {
	  height: 30vh;
    margin-left: 30vw;
    cursor: pointer;
}

 .active{
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

@media (min-width: 500px){

 .active{
    width: 80vw;
    margin: 6%;
}
}

@media (min-width: 600px){

 .active{
    width: 65vw;
    top: 13vh;
}
}

@media (min-width: 700px){

 .active{
    width: 55vw;
}
}

@media (min-width: 800px){

 .active{
    width: 45vw;
}
}


@media (min-width: 1000px){

 .active{
    width: 40vw;
}
}

@media (min-width: 1200px){

 .active{
    width: 30vw;
}
}

@media (min-width: 1600px){

 .active{
    width: 30vw;
    margin: 4%;
}
}

@media (min-width: 2000px){

 .active{
    width: 25vw;
    margin: 4%;

}
}

</style>