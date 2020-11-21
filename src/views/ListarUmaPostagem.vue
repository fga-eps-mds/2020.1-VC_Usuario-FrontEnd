<template>

    <Header/>

    <section class="divPostagemView">
        <div class="divListarPostagem">
            <div class="divPostagemTituloEStatus">
                <h1>{{postagem.post_title}}</h1>
                <h1 id="postagemStatus0" v-if="statusColor(this.postagem.post_status) === 0">{{postagem.post_status}}</h1>
                <h1 id="postagemStatus1" v-if="statusColor(this.postagem.post_status) === 1">{{postagem.post_status}}</h1>
                <h1 id="postagemStatus2" v-if="statusColor(this.postagem.post_status) === 2">{{postagem.post_status}}</h1>            
            </div>

            <div class="divPostagemNome">
                <h2>{{postagem.post_author}}</h2>
            </div>

            <div class="divPostagemCaracteristicas">
                <h2>{{postagem.post_place}}</h2>
                <h2>{{postagem.post_created_at}}</h2>
                <h2>{{postagem.post_category}}</h2>
            </div>

            <div class="divPostagemImagem">
                <img v-bind:src="postagem.post_midia"/>
            </div>

            <div class="divPostagemDescricao">
                <legend>Descrição:</legend>
                <p align = "justify">{{postagem.post_description}}</p>
            </div>

            <button v-on:click="apoiarPostagemMetodo" class="divApoiarBotao">
                <div class="divTextoImagemApoiarBotao">
                    <img src="../assets/like.png" class="iconeLike">
                    Apoiar
                </div>
            </button>

            <div class="divPostagemComentario">
                <legend>Comentários:</legend>
                <div id="teste" class="divFazerComentario">
                    <textarea id="textAreaComentario" v-on:keyup="ajusteRowsTextAreaComentario()" rows="2" placeholder="Adicione um comentário..." v-model="upcAtributos.comment_descripton"></textarea>
                    <button @click="comentarPostagemMetodo()">Comentar</button>
                </div>
            </div>

            <div class="divPostagemBotoes">
                <button type="submit">Reportar</button>
            </div>
        </div>
    </section>

    <MenuBar/>

</template> 

<script>

//import { useStore } from 'vuex'

import Header from '@/components/Header.vue'
import MenuBar from '@/components/MenuBar.vue'
import Postagem from '@/services/postagens.js'
import { ref } from 'vue'
/* eslint-disable */

export default {
    name: 'listarUmaPostagem',

    components: {
        Header,
        MenuBar,
    },

    setup() {
        const postagem = ref({})
        const statusColor = (status) => {
            var i = 0
            if(status === "Em andamento") i = 1
            else if (status === "Concluido") i = 2
            return i
        }
        return{ postagem, statusColor}
    },

    data() {
        return{            
            upsAtributos: {
                user_id: '',
                postage_id: ''
            },

            upcAtributos: {
                user_id: '',
                postage_id: '',
                comment_descripton: null
            },

            auxCaracteresTextArea: 50
        }
    },
    
    created(){
        Postagem.listarUmaPostagem(this.$route.params.id).then(res => {
            this.postagem = res.data;
        })
    },
    methods: {

        apoiarPostagemMetodo(){
            try{
                if( !this.$store.getters.getSwap ){
                    const token = this.$store.getters.getToken
                    if(!token){
                        console.log("Usuário não logado")
                    }
                    else{
                        this.upsAtributos.user_id = this.$store.getters.getId
                        this.upsAtributos.postage_id = this.postagem._id

                        Postagem.apoiarUmaPostagem(this.upsAtributos).then(resposta => {
                            console.log('Apoio feito com sucesso!')
                            console.log(resposta)
                        })
                    }
                }
                else{
                    console.log("Usuário não logado")
                }
            }
            catch(err){
                console.log({err})
            }
        },

        comentarPostagemMetodo(){
            try{
                if( !this.$store.getters.getSwap ){
                    const token = this.$store.getters.getToken
                    if(!token){
                        console.log("Usuário não logado")
                    }
                    else{
                        if(this.upcAtributos.comment_descripton == null){
                            alert("Comentário vazio")
                        }
                        else{
                            this.upcAtributos.user_id = this.$store.getters.getId
                            this.upcAtributos.postage_id = this.postagem._id
                            console.log(this.upcAtributos)

                            Postagem.comentarUmaPostagem(this.upcAtributos).then(resposta => {
                                console.log(resposta)
                                alert("Comentário feito com sucesso!")
                                
                                window.location.href = `http://localhost:8080/post/${this.postagem._id}`
                            })
                        }
                    }
                }
                else{
                    console.log("Usuário não logado")
                }
            }
            catch(err){
                console.log({err})
            }
        },

        ajusteRowsTextAreaComentario() {
            
            const objetotextAreaComentario = document.getElementById('textAreaComentario');

            if(this.auxCaracteresTextArea == 0){
                this.auxCaracteresTextArea = 50;
            }
            else{
                if (this.upcAtributos.comment_descripton.length > this.auxCaracteresTextArea) {
                    objetotextAreaComentario.rows += 1;
                    this.auxCaracteresTextArea += 50;
                }
                while (this.upcAtributos.comment_descripton.length + 50 < this.auxCaracteresTextArea) {
                    objetotextAreaComentario.rows -= 1;
                    this.auxCaracteresTextArea -= 50;
                }
            }
        }
    }
}
</script>

<style scoped lang="scss">
    @import "../assets/stylesheets/pallete.scss";

    section{
        width: 100%;
        display: flex;
    }

    .divListarPostagem{
        margin: 0 30px;
        min-width: 200px;
        width: 100%;
        margin-top: 65px;
        min-height: 620px;
    }

    .divPostagemTituloEStatus{
        width: 100%;
        font-size: 15px;
        color: $colorAzul;
        display: flex;
        flex: 1;
        justify-content: space-between;
    }

    .divPostagemNome{
        margin-top: 20px;
        margin-bottom: 10px;

        font-size: 10px;
    }

    .divPostagemCaracteristicas{
        flex: 1;
        display: flex;
        font-size: 10px;
        justify-content: space-between;
        margin-bottom: 40px; 
    }

    .divPostagemImagem{
        text-align: center;
        margin-bottom: 40px;

        & img {
            max-width:100%;
            max-height:150px;
        }
    }

    #postagemStatus0{
        color: $colorVermelho;
    }

    #postagemStatus1{
        color: $colorAzul;
    }

    #postagemStatus2{
        color: $colorVerde;
    }

    .divPostagemDescricao{
        margin-bottom: 20px;

        & legend{
            font-weight: bold;
        };
    }

    .divApoiarBotao{
        color: $colorBranca;
        background-color: $colorAzul;
        font-size: 20px;
        border: none;
        border-radius: 25px;
        width: 100%;
        height: 50px;
        margin-bottom: 20px;

        cursor: pointer;
    }
    
    .divApoiarBotao:hover{
        background-color: #060449;
    }

    .divTextoImagemApoiarBotao{
        display: inline-flex;
        height: 40px;
        align-items: center;
    }

    .iconeLike{
        height: 30px;
        margin: auto;
    }

    .divPostagemComentario{
        margin-bottom: 20px;

        & legend{
            margin-bottom: 20px;
            font-weight: bold;
        }
    }

    .divFazerComentario{
        align-items: center;
        display: flex;

        & textarea{
            flex: 1;

            font-size: 16px;
            border: none;
            resize: none;
            border-bottom: 1px solid $colorCinza;  
        }

        & button{
            height: 30px;
            width: 280px;
            margin-left: 20px;

            cursor: pointer;
            font-size: 20px;
            border-radius: 25px;
            color: #000000;
            background-color: $colorBranca;
            border: 1px solid $colorVerde;
        }

        & button:hover{
            color: $colorBranca;
            background-color: $colorVerde;
        }
    }

    @media only screen and (max-width:600px){
        .divFazerComentario{
            flex-direction: column;
            align-items: initial;

            & textarea{
                flex: none;
            }
            & button{
                width: 100%;
                flex: none;
                margin: 10px 0px 0px;
            }
        }
    }

    .divPostagemBotoes{
        display: flex;
        margin-bottom: 100px;

        & button{
            flex: 1;
            font-size: 20px;
            border: none;
            border-radius: 25px;
            height: 50px;

            cursor: pointer;
        }

        button:last-child{
            background-color: $colorBranca;
            border: 1px solid $colorCinza;
        }

        button:last-child:hover{
            background-color: $colorCinza;
        }
    }
</style>