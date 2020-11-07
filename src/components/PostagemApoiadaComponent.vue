<template>
    <div class="postagem">
        <div class="tituloEStatus">
            <span>{{title}}</span>
            <span>{{status}}</span>
        </div>

        <div class="autor">
            <p>{{author}}</p>
        </div>

        <div class="localEData">
            <p>{{local}}</p>
            <p>{{date}}</p>
        </div>

        <div class="divBotoes">
            <button @click="verMais(id)">Ver mais</button>
            <button v-on:click="apoiarPostagemMetodo(id)" id="buttonPostagemApoiada">Apoiado</button>
        </div>
    </div>
</template>

<script>

import Postagem from '@/services/postagens.js'

export default {
    name: 'postBlock',
    props: {
        title: String,
        status: String,
        author: String,
        local: String,
        date: String,
        id: String,
        supporting: Boolean
    },

    data: function () {
        return{
            upsAtributos: {
                user_id: '',
                postage_id: ''
            }
        }
    },

    methods: {
        verMais(post_id){
            this.$emit('ver-mais', post_id)
        },

        apoiarPostagemMetodo(post_id){

            try{
                if( !this.$store.getters.getSwap ){
                    const token = this.$store.getters.getToken
                    if(!token){
                        console.log("Usuário não logado")
                    }
                    else{
                        this.upsAtributos.user_id = this.$store.getters.getId
                        this.upsAtributos.postage_id = post_id

                        Postagem.apoiarUmaPostagem(this.upsAtributos).then(resposta => {
                            console.log(resposta)
                        })

                        mudarStyleApoio()
                    }
                }
            }catch(err){
                console.log({err})
            }
        },
    }
}

function mudarStyleApoio(){

    var buttonPostagemApoiada = document.getElementById("buttonPostagemApoiada");

    if(buttonPostagemApoiada.innerHTML == "Apoiado"){
        buttonPostagemApoiada.innerHTML = "Apoiar"
        buttonPostagemApoiada.style.backgroundColor = "#ffffff";
        buttonPostagemApoiada.style.color = "#000000";
    }
    else{
        buttonPostagemApoiada.innerHTML = "Apoiado"
        buttonPostagemApoiada.style.backgroundColor = "#248722";
        buttonPostagemApoiada.style.color = "#ffffff";
    }
}
</script>

<style scoped lang="scss">
@import "../assets/stylesheets/pallete.scss";

    .postagem {
        height: auto;
        border-radius: 15px;
        height: 150px;
        padding: 10px;

        border: solid 1px #DADDE0;
    }
    
    .autor{
        margin-bottom: 10px;
    }

    .tituloEStatus {
        height: auto;
        /* border: 1px solid red; */
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        margin-bottom: 20px;  

        & span:first-child{
            /* width: 70%; */
            padding-right: 30px;
            /* border: 1px solid red; */
            
            font-size: 20px;
            font-weight: bold;
            color: #090673;
        }

        & span:last-child{
            color: #CE1335;
        }
    }

    .localEData{
        display: flex;
        justify-content: space-between;

        margin-bottom: 20px;
    }

    /* BOTÕES */
    .divBotoes{
        display: flex;
        width: 80%;
        max-width: 300px;
        margin-bottom: 10px;
        
        & button{
            flex: 1;
            height: 30px;

            cursor: pointer;
            border: none;
            border-radius: 25px; 
        }

        & button:first-child{
            margin-right: 20px;
            color: #ffffff;
            background-color: #090673;
        }

        & button:first-child:hover{
            background-color: #060449;
        }

        & button:last-child{
            background-color: #248722;
            color: #ffffff;
            border: 1px solid #248722;
        }

        & button:last-child:hover{
            color: #000000;
            background-color: #ffffff;
        }
    }
</style>