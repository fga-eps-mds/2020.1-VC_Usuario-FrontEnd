<template>
    <header id="header">
        <div class="divBotaoVoltar">
            <img v-if="$route.path != '/'" src="../assets/whiteArrow.png" @click="$router.go(-1)"/>
        </div>

        <div class="divWordmark">
            <img src="../assets/wordmarkIcon.png"> 
       </div>
    </header>
</template>

<script>

/* Script do scroll da Header */
var prevScrollpos = window.pageYOffset;
window.onscroll = function(){

    var currentScrollpos = window.pageYOffset;
    
    if(prevScrollpos > currentScrollpos){
        document.getElementById("header").style.top = "0px";
    }else{
        document.getElementById("header").style.top = "-100px"
    }

    prevScrollpos = currentScrollpos;
}

</script>

<style lang="scss" scoped>

    header{
        top: 0;
        position: fixed;
        display: flex;

        height: 45px;
        width: 100%;
        
        transition: top 0.3s;
        background-color: #090673;
    }

    .divWordmark{
        display: flex;
        justify-content: center;

        height: 100%;
        width: 100px;
        margin: auto;

        & img{
            display: block;
            height: 35px;
            margin: auto;
            padding: 0 10px;
        }
    }

    .divBotaoVoltar{
        margin-left: 10px;
        margin-top: 7px;
        width: 0; 
        height: 0; 

        & img{
            height: 30px;
            margin: auto;
        }
    }

    
</style>

