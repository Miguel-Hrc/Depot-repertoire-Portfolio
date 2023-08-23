<template>  
    <div class="Présentation_Bloc">
        <div class="Présentation_Bloc_Title">
            <h1 class="Présentation_Bloc_Title-Title">Présentation</h1>
            <h2 class="Présentation_Bloc_Title-Subtitle"> &#60; HRC Miguel &#62;</h2>
        </div>
        <div class="Présentation_Bloc_Texte">
            <p class="Présentation_Bloc_Texte-Texte">Bonjour, je suis Miguel, un étudiant dans le développement web.
                   je m'instruis à la conception de sites web, d'application, etc.. ce projet représente mon avancement dans le domaine de la conception de sites web.
                   J'ai 26 ans, j'habite à la réunion, je suis un homme et avec l'acquisition des connaissances en matière de codage que je fais et ferai,
                   j'aimerais pouvoir travailler en tant que développeur web. (Comme ce fichier sera rendu public sur GitHub, je resterai anonyme) </p>
        </div>
    </div>
</template>

<style scoped>

.Présentation_Bloc {
	padding-top: 5vh;
	width: 100vw;
	height: 100vh;
	display: flex;
    flex-direction: column;
   	border-bottom: solid 1px var(--color-border);
    box-sizing: border-box;
    background-color: var(--color-div-variation);
}

.Présentation_Bloc_Title {
	margin-left: 6vw;
}


.Présentation_Bloc_Title-Title {
	font-family: 'Roboto Slab', serif;
	margin-left: 0;
	margin-top: 20vh;
	font-size: 4vh;
}

.Présentation_Bloc_Title-Subtitle {
	font-family: 'Handjet', cursive;
	font-size: 4vh;
	margin-left: 15vw;
	margin-top: 4vh;
	color : var(--color-text);
}

.Présentation_Bloc_Texte {
	border: solid 1px var(--color-border);
	background-color: var(--color-div);
	border-radius: 10px;
  	box-shadow: -7px -7px 0px var(--color-relief);
	margin-top: 4vh;
	margin-left: 10vw;
	margin-right: 10vw;
}

.Présentation_Bloc_Texte-Texte {
	font-family: 'Handjet', cursive;
	font-size: 2.5vh;
	font-weight: bold;
	margin : 1%;
	color : var(--color-text);
}

</style>
