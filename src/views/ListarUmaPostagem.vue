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
                    
                    <div class="divBotaoApoio">
                        <button v-on:click="apoiarPostagemMetodo" @click="statusBotaoApoio = !statusBotaoApoio" class="botaoApoio" :class="{'apoio': statusBotaoApoio}"><p v-if="!statusBotaoApoio">Apoiar</p><p v-if="statusBotaoApoio">Apoiado</p></button>
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
                <div class="divFazerComentario">
                    <textarea id="idtextAreaComentario" v-on:keyup="ajusteRowsTextAreaComentario()" rows="2" placeholder="Adicione um comentário..." v-model="upcAtributos.comment_descripton"></textarea>
                    <button @click="comentarPostagemMetodo()">Comentar</button>
                </div>

                <legend>Comentários:</legend>
                <div class="divComentario" v-for="comentario in comentarioData" :key="comentario.id">
                    <ComentarioComponent v-bind:id="comentario._id" v-bind:fk_user_id="comentario.fk_user_id" v-bind:fk_postage_id="comentario.fk_postage_id" v-bind:UPC_description="comentario.UPC_description" v-bind:UPC_author="comentario.UPC_author"/>
                </div>
            </div>
            <div class="divReportar">
                <button v-on:click="reportarPostagemMetodo" class="botaoReport" :class="{'report': statusBotaoReport}">Reportar</button>
            </div>           
        </div>
    </section>

    <MenuBarComponent/>

</template> 

<script>

//import { useStore } from 'vuex'
import HeaderComponent from '@/components/HeaderComponent.vue'
import MenuBarComponent from '@/components/MenuBarComponent.vue'
import ComentarioComponent from '../components/ComentarioComponent.vue'

import Postagem from '@/services/postagensServices.js'
import { ref } from 'vue'
/* eslint-disable */

export default {
    name: 'listarUmaPostagem',

    components: {
        HeaderComponent,
        MenuBarComponent,
        ComentarioComponent,
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
            comentarioData: {},

            upsEReportAtributos: {
                fk_user_id: '',
                fk_postage_id: ''
            },

            upcAtributos: {
                fk_user_id: '',
                fk_postage_id: '',
                comment_descripton: null
            },

            statusBotaoApoio: false,
            statusBotaoReport: false,

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
                    this.setupStatusBotaoReport(this.postagem.post_reporting);
                })
            }
            else{
                Postagem.listarUmaPostagemLogado(this.$route.params.id, this.$store.getters.getId).then(res => {
                    this.postagem = res.data;
                    this.setupStatusBotaoApoio(this.postagem.post_supporting);
                    this.setupStatusBotaoReport(this.postagem.post_reporting);
                })
            }
        }
        else{
            Postagem.listarUmaPostagem(this.$route.params.id).then(res => {
                this.postagem = res.data;
            })
        }

        Postagem.listarComentarios(this.$route.params.id).then(res => {
            this.comentarioData = res.data;
        })
    },

    methods: {

        apoiarPostagemMetodo(){
            try{
                if( !this.$store.getters.getSwap ){
                    const token = this.$store.getters.getToken
                    if(!token){
                        this.statusBotaoApoio = true
                        this.statusBotaoApoio = false
                        alert("Acesse sua conta para apoiar essa postagem.")
                    }
                    else{
                        this.upsEReportAtributos.fk_user_id = this.$store.getters.getId
                        this.upsEReportAtributos.fk_postage_id = this.postagem._id

                        Postagem.apoiarUmaPostagem(this.upsEReportAtributos).then(resposta => {
                        }, erro => {
                            this.statusBotaoApoio = false
                            alert("Erro no Apoio. Tente novamente mais tarde.")
                        })
                    }
                }
                else{
                    this.statusBotaoApoio = true
                    alert("Acesse sua conta para apoiar essa postagem.")
                }
            }
            catch(err){
                console.log({err})
            }
        },

        async comentarPostagemMetodo(){
            try{
                if( !this.$store.getters.getSwap ){
                    const token = this.$store.getters.getToken
                    if(!token){
                        alert("Acesse sua conta para comentar essa postagem.")
                    }
                    else{
                        this.upcAtributos.comment_descripton = this.upcAtributos.comment_descripton.trim()
                        if(this.upcAtributos.comment_descripton == null || this.upcAtributos.comment_descripton == ''){
                            alert("Comentário vazio")
                        }
                        else{
                            this.upcAtributos.fk_user_id = this.$store.getters.getId
                            this.upcAtributos.fk_postage_id = this.postagem._id

                            await Postagem.comentarUmaPostagem(this.upcAtributos).then(resposta => {
                                alert("Comentário feito com sucesso!")
                                
                                location.reload()
                            }, erro => {
                                alert("Erro na Cometário. Tente novamente mais tarde.")
                            })
                        }
                    }
                }
                else{
                    alert("Acesse sua conta para comentar essa postagem.")
                }
            }
            catch(err){
                console.log({err})
            }
        },

        reportarPostagemMetodo(){
            try{
                if(this.postagem.post_reporting == false){
                    if( !this.$store.getters.getSwap ){
                        const token = this.$store.getters.getToken
                        if(!token){
                            this.statusBotaoReport = false
                            alert("Viu algo indevido? Acesse sua conta e reporte essa postagem.")
                        }
                                            
                        else{
                            this.upsEReportAtributos.fk_user_id = this.$store.getters.getId
                            this.upsEReportAtributos.fk_postage_id = this.postagem._id

                            Postagem.denunciarUmaPostagem(this.upsEReportAtributos).then(resposta => {

                                if(resposta.status == 200){
                                    this.postagem.post_reporting = true
                                    this.statusBotaoReport = true
                                    alert("Denúncia feita com sucesso!")
                                }
                            }, erro => {
                                this.statusBotaoReport = false
                                alert("Erro na Denúncia. Tente novamente mais tarde.")
                            })
                        }
                    }
                    else{
                        this.statusBotaoReport = false
                        alert("Viu algo indevido? Acesse sua conta e reporte essa postagem.")
                    }
                }
                else{
                    alert("Postagem já Reportada!")
                }
            }catch(err){
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
        },

        setupStatusBotaoReport(post_reporting){
            this.statusBotaoReport = post_reporting
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

    .divBotaoApoio{
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

        .divBotaoApoio{
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
        margin-bottom: 40px;
        padding-bottom: 20px;

        border-bottom: solid 1px $colorCinza;

        & img {
            max-width:100%;
            max-height:150px;
        }
    }
    
    .divPostagemComentario{
        height: auto;
        width:100%;
        margin-bottom: 20px;
        padding-bottom: 30px;

        border-bottom: 1px solid $colorCinza;

        & legend{
            margin-bottom: 20px;

            font-size: 18px;
            color: $colorAzulEscuro;
        }
    }

    .divFazerComentario{
        align-items: center;
        display: flex;
        margin-bottom: 20px;

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
            font-size: 16px;
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

    @media only screen and (max-width:800px){
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

    .divComentario{
        height: auto;
        width: 100%;
        margin-bottom: 20px;
    }

    .divReportar{
        height: auto;
        width: 100%;

        display: flex;

        & button{
            width: 100%;
            height: 30px;
            font-size: 16px;
            border-radius: 25px;
            cursor: pointer;
        }

        .botaoReport{
            border: 1px solid $colorVermelho;
            background-color: $colorBranca;
        } 

        .report{
            background-color: $colorVermelho;
            color: $colorBranca;
        }

    }
</style>