<template>
    <header id="header">
        <div v-if="$route.path != '/'" class="divBotaoVoltar">
            <img src="../assets/whiteArrow1.png" onclick='history.go(-1)'>
        </div>

        <div class="divWordmark">
            <img src="../assets/WordMark_VC.png"> 
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
    @import "../assets/stylesheets/pallete.scss";

    header{
        top: 0;
        position: fixed;
        display: flex;

        height: 45px;
        width: 100%;
        
        transition: top 0.3s;
        background-color: $colorAzul;
    }

    .divWordmark{
        display: flex;
        justify-content: center;
        
        height: 100%;
        width: 100%;
        margin: auto;
        position:absolute;
        z-index: -50;

        & img{
            display: block;
            height: 30px;
            margin: auto;
            position:relative;
        }
    }

    .divBotaoVoltar{
        display: flex;
        align-items: flex-end;

        & img{
            height: 25px;
            padding: 10px 10px 10px 0;
            margin-left: 30px;
        }
    } 
</style>
