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
                <h2>Anônimo</h2>
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

            <button class="divApoiarBotao">
                <div class="divTextoImagemApoiarBotao">
                    <img src="../assets/like.png" class="iconeLike">
                    Apoiar
                </div>
            </button>

            <div class="divPostagemComentario">
                <legend>Comentários:</legend>
            </div>

            <div class="divPostagemBotoes">
                <button type="submit">Comentar</button>
                <button type="submit">Reportar</button>
            </div>
        </div>
    </section>

    <MenuBar/>

</template> 

<script>

import Header from '@/components/Header.vue'
import MenuBar from '@/components/MenuBar.vue'
import Postagem from '@/services/postagens.js'

export default {
    name: 'listarUmaPostagem',

    components: {
        Header,
        MenuBar,
    },

    data: function () {
        return{
            postagem: {}
        }
    },
    
    created: function(){
        
        Postagem.listarUmaPostagem(this.$route.params.post_id).then(res => {
            this.postagem = res.data;
            console.log(res.data);
        })
    },
    methods: {

        statusColor(status){
            var i = 0
            if(status === "Em andamento") i = 1
            else if (status === "Concluido") i = 2
            return i
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
        color: #CE1335;
    }

    #postagemStatus1{
        color: #090673;
    }

    #postagemStatus2{
        color: #248722;
    }

    .divPostagemDescricao{
        margin-bottom: 20px;

        & legend{
            font-weight: bold;
        };
    }

    .divApoiarBotao{
        color: #ffffff;
        background-color: #090673;
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
            font-weight: bold;
        };
    }

    .divPostagemBotoes{
        display: flex;

        & button{
            flex: 1;
            font-size: 20px;
            border: none;
            border-radius: 25px;
            height: 50px;

            cursor: pointer;
        }

        button:first-child{
            margin-right: 20px;
            color: #ffffff;
            background-color: #090673;
        }

        button:first-child:hover{
            background-color: #060449;
        }

        button:last-child{
            background-color: #ffffff;
            border: 1px solid #DADDE0;
        }

        button:last-child:hover{
            background-color: #DADDE0;
        }
    }
</style>