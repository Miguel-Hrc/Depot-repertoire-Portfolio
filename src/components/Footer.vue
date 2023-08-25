<template>
    <div class="socialNetwork">
        <a href="https://www.linkedin.com/school/centre-europeen-de-formation/"><img src="../assets/img/logoLinkedin.png" class="logo_Linkedin" alt="image du logo Linkedin, lien" title="Lien Linkedin"></a>
        <a href="https://github.com/Miguel-Hrc"><img src="../assets/img/logoGitHub.png" class="logo_Github" alt="image du logo GitHub, lien" title="Lien GitHub"></a>
    </div>
    <div>
        <p class="Update">Dernière mise à jour le<time datetime="2023-08-25"> 25 aout 2023</time>.</p>
    </div>
</template>

<style>



.socialNetwork {
	display: flex;
	flex-direction: row;
	justify-content: center;
    text-align: center;
    box-sizing: border-box;
	padding-top: 1%;
}

.logo_Linkedin {
	margin-top: 1vh;
	width: 6vh;
}

.logo_Github {
    margin-top: 0.5vh;
	width: 7.2vh;
}

.Update {
	font-family: 'Roboto Slab', serif;
	text-align: center;
    padding-bottom: 1vh;
}



</style>
