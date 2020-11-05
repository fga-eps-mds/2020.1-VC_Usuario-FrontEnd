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
            <div class="divBotaoVerMaisApoiar">
                <button @click="verMais(id)">Ver mais</button>
                <button v-on:click="apoiarPostagemMetodo(id)" id="buttonPostagem">Apoiar</button>
            </div>

            <div v-if="$route.name === 'Perfil'" class="divBotaoEditar">
                <img src="../assets/edit.png" @click="editar(id)">
            </div>

        </div>
    </div>
</template>

<script>

import Postagem from '@/services/postagens.js'

export default {
    name: 'postBlock',
    props: {
        _id: String,
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

        editar(post_id) {
            this.$emit('editar-postagem', post_id)
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

    var buttonPostagem = document.getElementById("buttonPostagem");

    if(buttonPostagem.innerHTML == "Apoiar"){
        buttonPostagem.innerHTML = "Apoiado"
        buttonPostagem.style.backgroundColor = "#248722";
        buttonPostagem.style.color = "#ffffff";
    }
    else{
        buttonPostagem.innerHTML = "Apoiar"
        buttonPostagem.style.backgroundColor = "#ffffff";
        buttonPostagem.style.color = "#000000";
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

        border: solid 1px $colorCinza;
    }
    
    .autor{
        margin-bottom: 10px;
    }

    .tituloEStatus {
        height: auto;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        margin-bottom: 20px;  

        & span:first-child{
            padding-right: 30px;            
            font-size: 20px;
            font-weight: bold;
            color: $colorAzul;
        }

        & span:last-child{
            color: $colorVermelho;
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
        width: 100%;
        margin-bottom: 10px;
        justify-content: space-between;

        & img {
            height: 20px;
        }

        .divBotaoVerMaisApoiar {
            display: flex;
            width: 80%;
            max-width: 300px;
            justify-content: space-between;

            & button{
                flex: 1;
                height: 30px;

                cursor: pointer;
                border: none;
                border-radius: 25px; 
            }

            & button:first-child{
                margin-right: 20px;
                color: $colorBranca;
                background-color: $colorAzul;
            }

            & button:first-child:hover{
                background-color: $colorAzulEscuro;
            }

            & button:last-child{
                background-color: $colorBranca;
                border: 1px solid $colorVerde;
            }

            & button:last-child:hover{
                color: $colorBranca;
                background-color: $colorVerde;
            }
        }

        .divBotaoEditar{
            & img{
                cursor: pointer;
            }
        }
    }
</style>