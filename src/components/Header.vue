<template>
    <header id="header">
        <div v-if="$route.path != '/'" class="divBotaoVoltar">
            <img src="../assets/whiteArrow1.png" onclick='history.go(-1)'>
        </div>

        <div class="divWordmark">
            <img src="../assets/WordMark_VC.png" onclick="window.location.href='/'"> 
        </div>

        <div class="divSideBar">
            <input type="checkbox" id=chec>
            <label for="chec">
                <img src="../assets/sidebar.png">
            </label>
            <nav class="SideBar">
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/criarpostagem">Criar Postagem</a></li>
                    <li><a href="">Notícias</a></li>
                    <li><a href="/Perfil">Perfil</a></li>
                </ul>
            </nav>
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

    @media only screen 
    and (min-device-width : 0px) 
    and (max-device-width : 1024px) {

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
            height: 30px;
            padding: 5px 10px;
            margin: auto;

            display: block;
            position: relative;
            
            cursor: pointer;
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

    .divSideBar{
        display: none;
    }

    }

    @media only screen 
    and (min-device-width : 1024px) {

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
            height: 30px;
            width: 60px;
            padding: 5px 10px;
            margin: auto;

            display: block;
            position: relative;
            
            cursor: pointer;
        }
    }

    .divBotaoVoltar{
        display: none;
    }

    .divSideBar{
        position: fixed;
        top: 7px;
        left: 30px;
        color: $colorBranca;
        padding: 0px;
        margin: 0px;
        height: 100%;
        z-index: -1;
    }
        & img{
            height: 35px;
            width: 40px;
            color: $colorBranca
        }

        &ul {
            list-style: none;
        }

        & a{
            font-weight: bold;
            color: $colorAzulEscuro;
            font-size: 30px;
            text-decoration: none;
            display: block;
            padding: 35px;
            border-bottom: 1px solid $colorCinza;
        }

        & a:hover{
            background-color: $colorAzulEscuro;
            color: $colorBranca;
        }

        & input[type="checkbox"]
        {
            display: none;
        }

        & input[type="checkbox"]:checked ~ nav
        {
            transform: translateX(305px);
            transition: 1s;
        }

        &nav[class="SideBar"]{
            background-color: $colorBranca;
            height: 100%;
            border-right: 1px solid $colorCinza;
            width: 305px;
            position:absolute;
            left: -340px           
        }

    }
    
</style>