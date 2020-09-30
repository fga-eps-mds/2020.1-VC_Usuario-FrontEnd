<template>
    <router-view/>
</template>

<style lang="scss">

    * {
        margin: 0;
        padding: 0;
        outline: 0;
        /* box-sizing: border-box; */

        @import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');
        font-family: 'Montserrat', sans-serif;
    }

    html, body, #app{
        margin: 0;
        height: 100%;
    }

    body {
        margin: 0;
        width: 100%; 
    
        text-rendering: optimizeLegibility;
        -webkit-font-smoothing: antialiased;

        color: #000000;
        font-size: 16px;
        background-color: #ffffff;
    }

    select, input{
        text-decoration: none;
        box-shadow: 0 0 0 0;
        border: 0 none;
        outline: 0;
    }

    //Cores da Identidade Visual do Produto:
        $colorAzul: #090673;
        $colorVermelho: #CE1335;
        $colorVerde: #248722;
        $colorCinza: #DADDE0;
</style>
