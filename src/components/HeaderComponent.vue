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
            <nav>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li class="botaoCriar"><a href="/criarpostagem">Criar Postagem</a></li>
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
        document.getElementById("header").style.top = "-45px"
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

    @media only screen and (max-width:600px){
        .divSideBar{
            display: none;
        }
    }

    @media only screen and (min-width:600px){
        .divBotaoVoltar{
            display: none;
        }
    }

    .divSideBar{
        height: 100%;
        top: 9px;
        margin-left: 30px;

        position: absolute;
        
        & img{
            height: 25px;
            width: 35px;
            margin-bottom: 7px;
        }

        & ul {
            list-style: none;
        }

        & a{
            font-weight: bold;
            color: $colorAzulEscuro;
            text-decoration: none;
            display: block;
            padding: 20px 35px;
            border-bottom: 1px solid $colorCinza;
        }

        & a:hover{
            background-color: $colorAzulEscuro;
            color: $colorBranca;
        }

        & input{
            display: none;
        }

        & input:checked ~ nav{
            transform: translateX(305px);
            transition: 1s;
        }  

        & nav{
            background-color: $colorBranca;
            height: 100%;
            border-right: 1px solid $colorCinza;
            width: 305px;
            position:fixed;
            left: -310px;           
        }
    }   
</style>