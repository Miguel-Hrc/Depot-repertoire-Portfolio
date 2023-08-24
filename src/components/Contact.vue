<template>
  <div class="Contact_Bloc">
      <h1 class="Contact_Bloc-Title">Contact</h1>

      <form class="form" @submit.prevent="sendEmail">

            <label>Nom</label>
            <input 
              type="text" 
              v-model="name"
              name="name"
              placeholder="John Snow"
            >

            <label>Email</label>
            <input 
              type="email" 
              v-model="email"
              name="email"
              placeholder="Email@gmail.com"
            >

            <label>Message</label>
            <textarea 
              name="message"
              v-model="message"
              cols="30" rows="5"
              placeholder="Bonjour, je t'envoie un message"
            >
            </textarea>
            
            <input class="button_form" type="submit" value="Envoyer">

        </form>
  </div>
</template>

<script>

import emailjs from 'emailjs-com';

export default {
  name: 'ContactUs',
  data() {
    return {
      name: '',
      email: '',
      message: ''
    }
  },
  methods: {
    
    sendEmail(e) {
      try {
        emailjs.sendForm('service_uj43xtj', 'template_nsexbye', e.target,
        'iWBySHQtahZgph7Sy', {
          name: this.name,
          email: this.email,
          message: this.message
        })
      } 
      catch (err) {
           if (err instanceof ReferenceError) {
            alert( "JSON Error: " + err.message );
           } else {
            throw err; // rethrow
      }
    }
      // Reset form field
      this.name = ''
      this.email = ''
      this.message = ''
    },
  }
}
</script>

<style scoped>

.Contact_Bloc {
	height: 100vh;
	display: flex;
	flex-direction: row-reverse;
	justify-content: space-around;
}

.Contact_Bloc-Title {
	font-family: 'Roboto Slab', serif;
	margin-top: 40vh;
	font-size: 4vh;
	color: var(--color-text-variation);
}

.form {
  font-family: 'Handjet', cursive;
  font-weight: bold;
  font-size: 2vh;
  color: black;
  box-shadow: -5px -5px 0px var(--color-relief-variation);
  border-radius: 7px;
  background-color: var(--color-div-variation);
  border: solid 3px var(--color-border-variation); 
  height: 50vh;
  width: 50vw;
  padding: 1%;
  margin-top: 30vh;
}

input { 
	font-family: 'Roboto Slab', serif;
	width: 100%;
	height: 3vh;
	font-size: 1vh;
	border: 3px solid var(--color-border-variation);
	border-radius: 7px;
}


textarea {
	font-family: 'Roboto Slab', serif;
	width: 100%;
	height: 15vh;
	font-size: 1vh;
	border: 3px solid var(--color-border-variation);
	border-radius: 7px;
}

.button_form {
  font-family: 'Handjet', cursive;
  font-weight: bold;
  font-size: 2vh;
  margin-left: 40%;
  display: block;
  cursor: pointer;
  color : black;
  border-radius: 7px;
  border: 3px solid var(--color-border-variation);
  width : 20vw;
}
	
@media (prefers-color-scheme: dark) {
    .form {
     color: var(--color-text-variation);
    }
}
</style>
