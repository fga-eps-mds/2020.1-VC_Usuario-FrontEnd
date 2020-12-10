<template>
    <div class="divComponentPostagem">
        <div class="tituloEStatus">
            
            <span>{{title}}</span>

            <span id="postagemStatus0" v-if="statusColor(status) === 0"><p><span></span><strong>{{status}}</strong></p></span>
            <span id="postagemStatus1" v-if="statusColor(status) === 1"><p><span></span><strong>{{status}}</strong></p></span>
            <span id="postagemStatus2" v-if="statusColor(status) === 2"><p><span></span><strong>{{status}}</strong></p></span>
        </div>

        <div class="autor">
            <p>{{author}}</p>
        </div>

        <div class="localCategoriaEData">
            <p>{{local}}</p>
            <p>{{category}}</p>
            <p>{{date}}</p>
        </div>

        <div class="divBotoes">
            <div class="divBotaoVerMaisApoiar">
                <button @click="verMais(id)">Ver mais</button>
                <button v-on:click="apoiarPostagemMetodo(id, n)" class="botaoApoio" :class="{'apoio': statusBotaoApoio}"> <p v-if="!statusBotaoApoio">Apoiar</p><p v-if="statusBotaoApoio">Apoiado</p></button>
            </div>

            <div v-if="$route.name === 'Perfil'" class="divBotaoEditar">
                <img src="../assets/edit.png" @click="editar(id)">
            </div>
        </div>
    </div>
</template>

<script>  
import Postagem from '@/services/postagensServices.js'
/* eslint-disable */

export default {
    name: 'postBlock',
    setup() {
        const verMais = (post_id) => {
            window.location.href = `/postagem/${post_id}`
        }

        const statusColor = (status) => {
            var i = 0
            if(status === "Em andamento") i = 1
            else if (status === "Resolvido") i = 2
            return i
        }
        return { verMais, statusColor }
    },
    
    props: {
        n: Number,
        title: String,
        status: String,
        author: String,
        local: String,
        date: String,
        category: String,
        id: String,
        supporting: Boolean
    },
    
    data: function () {
        return{
            upsAtributos: {
                fk_user_id: '',
                fk_postage_id: ''
            },

            statusBotaoApoio: false
        }
    },

    created: async function() {
        await this.setupStatusBotaoApoio(this.supporting);
    },

    methods: {

        editar(post_id) {
            this.$emit('editar-postagem', post_id)
        },

        async apoiarPostagemMetodo(post_id, i){

            try{
                if( !this.$store.getters.getSwap ){
                    const token = this.$store.getters.getToken
                    if(!token){
                        this.statusBotaoApoio = true
                        this.statusBotaoApoio = false
                        alert("Acesse sua conta para apoiar essa postagem.")
                    }
                    else{
                        
                        this.upsAtributos.fk_user_id = this.$store.getters.getId
                        this.upsAtributos.fk_postage_id = post_id

                        await Postagem.apoiarUmaPostagem(this.upsAtributos).then(resposta => {
                            this.statusBotaoApoio = !this.statusBotaoApoio
                            this.$emit('updatePost', i)
                        }, erro => {
                            this.statusBotaoApoio = false
                            alert("Erro em Apoio Postagem. Tente novamente mais tarde.")
                        })
                    }
                }
                else{
                    this.statusBotaoApoio = true

                    alert("Acesse sua conta para apoiar essa postagem.")
                }
            }catch(err){
                console.log({err})
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

.divComponentPostagem {
    height: auto;
    min-width: 200px;
    max-width: 620px;
    padding: 10px;

    border-radius: 15px;
    border: solid 1px $colorCinza;
}

.autor {
    margin-bottom: 20px;
}

.tituloEStatus {
    display: flex;
    flex-direction: column;

    margin-bottom: 20px;

    & span:first-child {
        margin-bottom: 20px;

        font-weight: bold;
        color: $colorAzulEscuro;
    }

    & span:last-child {
        color: $colorVermelho;
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

.localCategoriaEData {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    
    margin-bottom: 20px;

    & p{       
        font-size: 14px;
        color: $colorCinzaEscuro;
    }

    & p:first-child{
        margin-right: 20px;
    }

    & p:nth-child(even){
        margin-right: 20px;
    }
}

.divBotoes{
    width: 100%;

    display: flex;
    justify-content: space-between;

    .divBotaoVerMaisApoiar {
        width: 80%;
        min-width: 200px;
        max-width: 300px;
        
        display: flex;
        justify-content: space-between;

        & button{
            flex: 1;
            height: 30px;
            margin-top: 0px;
            
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
        
        .botaoApoio{
            background-color: $colorBranca;
            border: 1px solid $colorVerde;
        }

        .botaoApoio:hover{
            color: $colorBranca;
            background-color: $colorVerde;
        }

        .apoio{
            background-color: $colorVerde;
            color: $colorBranca; 
        }
    }
    
    .divBotaoEditar{
        & img{
            height: 20px;
            margin-left: 20px;

            cursor: pointer;
        }
    }
}
</style>
