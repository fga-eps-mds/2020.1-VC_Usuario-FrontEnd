<template>

    <HeaderComponent/>

    <section>
        <div class="divListarPostagem">
            <div class="divPostagemTituloEStatus">

                <h1>{{postagem.post_title}}</h1>

                <div class="divStatusEBotoes">
                    <span id="postagemStatus0" v-if="statusColor(this.postagem.post_status) === 0"><p><span>Estágio de Solução: </span>{{postagem.post_status}}</p></span>
                    <span id="postagemStatus1" v-if="statusColor(this.postagem.post_status) === 1"><p><span>Estágio de Solução: </span>{{postagem.post_status}}</p></span>
                    <span id="postagemStatus2" v-if="statusColor(this.postagem.post_status) === 2"><p><span>Estágio de Solução: </span>{{postagem.post_status}}</p></span>
                    
                    <div class="divBotoes">
                        <button v-on:click="apoiarPostagemMetodo" @click="statusBotaoApoio = !statusBotaoApoio" class="botaoApoio" :class="{'apoio': statusBotaoApoio}">Apoiar</button>
                    </div>
                </div>          
            </div>

            <div class="divPostagemInformacoes">
                
                <p><span>Autor: </span>{{postagem.post_author}}</p>
                <p><span>Campus: </span>{{postagem.post_place}}</p>
                <p><span>Data: </span>{{postagem.post_created_at}}</p>
                <p><span>Categoria: </span>{{postagem.post_category}}</p>
            </div>

            <div class="divPostagemDescricao">
                <legend>Descrição:</legend>
                <p>{{postagem.post_description}}</p>
            </div>

            <div class="divPostagemImagem">
                <img v-bind:src="postagem.post_midia"/>
            </div>

            <div class="divPostagemComentario">
                <legend>Comentários:</legend>
                <div class="divFazerComentario">
                    <textarea id="idtextAreaComentario" v-on:keyup="ajusteRowsTextAreaComentario()" rows="2" placeholder="Adicione um comentário..." v-model="upcAtributos.comment_descripton"></textarea>
                    <button @click="comentarPostagemMetodo()">Comentar</button>
                </div>
            </div>
            <div class="divReportar">
                <button @click="reportarPostagemMetodo()">Reportar</button>
            </div>           
        </div>
    </section>

    <MenuBarComponent/>

</template> 

<script>

//import { useStore } from 'vuex'
import HeaderComponent from '@/components/HeaderComponent.vue'
import MenuBarComponent from '@/components/MenuBarComponent.vue'

import Postagem from '@/services/postagensServices.js'
import { ref } from 'vue'
/* eslint-disable */

export default {
    name: 'listarUmaPostagem',

    components: {
        HeaderComponent,
        MenuBarComponent,
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
            upsEReportAtributos: {
                user_id: '',
                postage_id: ''
            },

            upcAtributos: {
                user_id: '',
                postage_id: '',
                comment_descripton: null
            },

            statusBotaoApoio: false,

            auxCaracteresTextArea: 50
        }
    },
    
    created(){
        if( !this.$store.getters.getSwap ){
            const token = this.$store.getters.getToken
            if(!token){
                Postagem.listarUmaPostagem(this.$route.params.id).then(res => {
                    this.postagem = res.data;

                    this.setupStatusBotaoApoio(this.postagem.post_supporting);
                })
            }
            else{
                Postagem.listarUmaPostagemLogado(this.$route.params.id, this.$store.getters.getId).then(res => {
                    this.postagem = res.data;

                    this.setupStatusBotaoApoio(this.postagem.post_supporting);
                })
            }
        }
        else{
            Postagem.listarUmaPostagem(this.$route.params.id).then(res => {
                this.postagem = res.data;
            })
        }
    },
    methods: {

        apoiarPostagemMetodo(){
            try{
                if( !this.$store.getters.getSwap ){
                    const token = this.$store.getters.getToken
                    if(!token){
                        this.statusBotaoApoio = true

                        alert("Usuário não logado")
                    }
                    else{
                        this.upsEReportAtributos.user_id = this.$store.getters.getId
                        this.upsEReportAtributos.postage_id = this.postagem._id

                        Postagem.apoiarUmaPostagem(this.upsEReportAtributos).then(resposta => {
                            console.log(resposta)
                        })
                    }
                }
                else{
                    this.statusBotaoApoio = true

                    alert("Usuário não logado")
                }
            }
            catch(err){
                console.log({err})
            }
        },

        reportarPostagemMetodo(){
            try{
                if( !this.$store.getters.getSwap ){
                    const token = this.$store.getters.getToken
                    if(!token){
                        alert("Usuário não logado")
                    }
                    else{
                        this.upsEReportAtributos.user_id = this.$store.getters.getId
                        this.upsEReportAtributos.postage_id = this.postagem._id

                        Postagem.denunciarPostagem(this.upsEReportAtributos).then(resposta => {
                            console.log(resposta)
                            alert("Denúncia feita com sucesso!")
                        })                       
                    }
                }else{
                    alert("Usuário não logado")
                }
            }catch(err){
                console.log({err})
            }
        },

        comentarPostagemMetodo(){
            try{
                if( !this.$store.getters.getSwap ){
                    const token = this.$store.getters.getToken
                    if(!token){
                        alert("Usuário não logado")
                    }
                    else{
                        if(this.upcAtributos.comment_descripton == null){
                            alert("Comentário vazio")
                        }
                        else{
                            this.upcAtributos.user_id = this.$store.getters.getId
                            this.upcAtributos.postage_id = this.postagem._id

                            Postagem.comentarUmaPostagem(this.upcAtributos).then(resposta => {
                                console.log(resposta)
                                alert("Comentário feito com sucesso!")
                                
                                window.location.href = `/postagem/${this.postagem._id}`
                            })
                        }
                    }
                }
                else{
                    alert("Usuário não logado")
                }
            }
            catch(err){
                console.log({err})
            }
        },

        ajusteRowsTextAreaComentario() {
            
            const objetotextAreaComentario = document.getElementById('idtextAreaComentario');

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
        },

        setupStatusBotaoApoio(post_supporting){
            this.statusBotaoApoio = post_supporting
        }
    }
}
</script>

<style scoped lang="scss">
    @import "../assets/stylesheets/pallete.scss";

    section{
        width: 100%;
        display: flex;
        padding-bottom: 100px;
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
        padding-bottom: 20px;
        
        display: flex;
        flex-direction: column;

        border-bottom: 1px solid $colorCinza;

        & h1{
            width: 100%;
            margin-bottom: 20px;

            color: $colorAzulEscuro;
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
    }

    .divStatusEBotoes{
        height: auto;

        display: flex;
        flex-wrap: wrap;

        justify-content: space-between;
        align-items: center;

        & span{
            flex: 1;

            font-size: 18px;
            color: $colorAzulEscuro;
        }
    }

    .divBotoes{
        height: auto;
        
        display: flex;

        & button{
            width: 280px;
            height: 50px;

            font-size: 20px;
            border: none;
            border-radius: 25px;
            cursor: pointer;
        }

        .botaoApoio{
            background-color: $colorBranca;
            border: 1px solid $colorVerde;
        }

        .apoio{
            background-color: $colorVerde;
            color: $colorBranca; 
        }
    }

    @media only screen and (max-width:800px){
        .divStatusEBotoes{
            flex-direction: column;

            align-items: initial;

            & span{
                margin-bottom: 20px;
            }
        }

        .divBotoes{
            & button{
                width: 100%;
            }
        }
    }

    .divPostagemInformacoes{
        width: 100%;
        max-width: 620px;
        margin-bottom: 10px;
        padding-top: 20px;

        display: flex;
        flex-wrap: wrap;

        & h2{
            width: 100%;
            margin: 20px 0px;

            color: $colorAzulEscuro;
        }

        & span{
            font-size: 18px;
            color: $colorAzulEscuro;
        }

        & p{
            padding: 10px 20px 10px 0px;

            color: $colorCinzaEscuro;
        }
    }

    .divPostagemDescricao{
        margin-bottom: 20px;

        & legend{
            margin-bottom: 5px;

            font-size: 18px;
            color: $colorAzulEscuro;
        }

        & p{
            text-align: justify;
            font-style: oblique;
            color: $colorCinzaEscuro;
        }
    }

    .divPostagemImagem{
        text-align: center;
        margin-bottom: 20px;
        padding-bottom: 20px;

        border-bottom: 1px solid $colorCinza;

        & img {
            max-width:100%;
            max-height:150px;
        }
    }
    
    .divPostagemComentario{
        margin-bottom: 20px;

        & legend{
            margin-bottom: 20px;

            font-size: 18px;
            color: $colorAzulEscuro;
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

    .divReportar{
        height: auto;
        
        display: flex;

        & button{
            width: 100%;
            height: 50px;
            background-color: $colorCinza;
            font-size: 20px;
            border-radius: 25px;
            cursor: pointer;
        }

        & button:hover{
            background-color: $colorVermelho;
            color: $colorBranca;
        }

    }

    
</style>