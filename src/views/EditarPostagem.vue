<template>

    <Header/>
    
    <section>
        <form @submit.prevent="" enctype="multipart/form-data">

            <h1>Editar Postagem</h1>

            <input class= "inputTitulo" type="text" placeholder="Título" v-model="editarPostagemObjeto.post_title">

            <div class="divCategoriaLocal">
                <select v-model="editarPostagemObjeto.post_category">
                    <option disabled value="">Categoria</option>
                    <option>Limpeza</option>
                    <option>Segurança</option>
                    <option>Infraestrutura</option>
                    <option>Transportes</option>
                    <option>Serviços Terceirizados</option>
                    <option>Meio Ambiente</option>
                    <option>Jardinagem</option>
                    <option>Alimentação nos campi</option>
                    <option>Saúde e seguridade</option>
                    <option>Abuso de Assédio</option>
                    <option>Outros</option>
                </select>

                <select v-model="editarPostagemObjeto.post_place">
                    <option disabled value="">Local</option>
                    <option>FGA</option>
                    <option>DARCY</option>
                    <option>FCE</option>
                    <option>FUP</option>
                </select>
            </div>

            <!-- <div class="divImagem">
                <label for="file">Escolha sua imagem</label>                               
                <input type="file" ref="file" id="file" accept="image/png, image/jpeg" @change="imagemSelecionada">  
            </div> -->

            <div class="divDescricao">
                <legend>Descrição</legend>
                <textarea class="inputDescricao" rows="5" cols="50" v-model="editarPostagemObjeto.post_description"></textarea>
            </div>
            
            <div class="divBotoes">
                <button class="buttonAcao" @click="mostrarModalEditar">Salvar</button>
                <button class="buttonBasico" onclick='history.go(-1)'>Cancelar</button>
                <button class="buttonExcluir" @click="mostrarModalExcluir">Excluir</button>
            </div>
        </form>
    </section>

    <div class="divModal" v-if="modalConfirmacaoEditar">
        <div class="divConteudoModal">
                <p>Tem certeza que deseja Salvar?</p>

            <div class="divBotoesModal">
                <button type="button" class="buttonBasico" @click="modalConfirmacaoEditar = false">Cancelar</button>
                <button type="button" class="buttonAcao" @click="metodoEditarPostagem">Continuar</button>
            </div>
        </div>
    </div>

    <div class="divModal" v-if="modalConfirmacaoExcluir">
        <div class="divConteudoModal">
                <p>Tem certeza que deseja Excluir?</p>

            <div class="divBotoesModal">
                <button type="button" class="buttonBasico" @click="modalConfirmacaoExcluir = false">Cancelar</button>
                <button type="button" class="buttonExcluir" @click="metodoExcluirPostagem">Excluir</button>
            </div>
        </div>
    </div>

    <MenuBar/>
    
</template>

<script>
import Header from '@/components/Header.vue'
import MenuBar from '@/components/MenuBar.vue'
import Postagem from '@/services/postagens.js'
/* eslint-disable */

export default {

    name: 'EditarPostagem',
    components:{
        Header,
        MenuBar
    },

    data(){
        return{
            editarPostagemObjeto: {
                user_id: '',
                postage_id: '',
                post_title: '',
                post_place: '',
                post_category: '',
                post_description: ''
            },

            excluirPostagemObjeto: {
                user_id: '',
                postage_id: ''
            },

            modalConfirmacaoEditar: false,
            modalConfirmacaoExcluir: false
        }
    },

    created: function(){
        
        Postagem.listarUmaPostagem(this.$route.params.post_id).then(res => {
            this.editarPostagemObjeto.user_id = this.$store.getters.getId
            this.editarPostagemObjeto.postage_id = res.data._id
            this.editarPostagemObjeto.post_title = res.data.post_title
            this.editarPostagemObjeto.post_place = res.data.post_place
            this.editarPostagemObjeto.post_category = res.data.post_category
            this.editarPostagemObjeto.post_description = res.data.post_description

            this.excluirPostagemObjeto.user_id = this.$store.getters.getId
            this.excluirPostagemObjeto.postage_id = res.data._id
        })
    },

    methods:{

        mostrarModalEditar(){
            this.modalConfirmacaoEditar = true
        },

        mostrarModalExcluir(){
            this.modalConfirmacaoExcluir = true
        },
        
        metodoEditarPostagem(){
            Postagem.editarUmaPostagem(this.editarPostagemObjeto).then(res => {
                console.log(res.data)
                window.location.href='/perfil'  
            })
        },

        metodoExcluirPostagem(){
            Postagem.excluirUmaPostagem(this.excluirPostagemObjeto).then(res => {
                console.log(res.data)
                window.location.href='/perfil'  
            })
        }
    }
}
</script>

<style lang="scss" scoped>
    @import "../assets/stylesheets/pallete.scss";

    section{
        width: 100%;
        display: flex;
        padding-bottom: 100px;
    }

    form{
        height: auto;
        margin: 0 30px;
        min-width: 200px;
        width: 100%;
        margin-top: 65px;
        min-height: 620px;

        & h1{
            color: $colorAzulEscuro;
        }
    }

    .inputTitulo{
        box-shadow: 0 0 0 0;
        border: 0 none;
        outline: 0;
        display: block;

        padding: 0;

        height: 50px;
        margin: 20px 0 20px;
        width: 100%;

        font-size: 18px;
        border-bottom: 1px solid $colorCinza; 
    }

    .inputTitulo::placeholder {
        font-size: 20px;
        color: $colorPreta;
    }

    .divCategoriaLocal{
        display: flex;

        height: 40px;
        margin-bottom: 20px;

        & select{
            width: 50%;

            cursor: pointer;
            border-radius: 10px;
            background-color: $colorBranca;
            border: 1px solid $colorCinza;
        }

        select:first-child{
            margin-right: 20px;
        }
    }

    .divDescricao {
        margin-bottom: 20px;
        height: 120px;

        .inputDescricao{
            width: 100%;

            font-size: 16px;
            border-radius: 10px;
            border: 1px solid $colorCinza;
        }

        .inputDescricao::placeholder {
            font-size: 16px;
            color: $colorPreta;
        }
    }

    .divBotoes{
        width: 100%;
        height: 50px;

        & button{
            height: 50px;
            width: 100%;
            margin-bottom: 20px;

            cursor: pointer;
            font-size: 20px;
            border-radius: 25px;
        }
    }
    
    .divModal{
        width: 100vw;
        height: 100vh;
        top: 0;
        left: 0;
        bottom: 0;

        position: fixed;
        display: flex;
        flex-direction: row;
        justify-content: center;
        
        background-color: rgba(0,0,0,.7);
        
        & p{
            font-size: 20px;
            color:  $colorAzulEscuro;
            margin-bottom: 20px;
        }
    }

    .divConteudoModal{
        width: 80%;
        height: auto;
        margin: auto;
        padding: 20px;

        text-align: center;

        border-radius: 15px;
        background-color: $colorBranca;
    }

    .divBotoesModal{
        width: 100%;

        display: flex;
        flex-direction: column;

        & button{
            height: 50px;
            width: 100%;

            cursor: pointer;
            font-size: 20px;
            border-radius: 25px;   
        }

        & button:first-child{
            margin-bottom: 20px;
        }
    }

    .buttonBasico{
        color: #000000;
        background-color: $colorBranca;
        border: 1px solid $colorCinza;
    }

    .buttonBasico:hover{
        background-color:$colorCinza;
    }
    
    .buttonExcluir{
        color: $colorBranca;
        background-color: $colorVermelho;
        border: 1px solid $colorCinza;
    }

    .buttonExcluir:hover{
        background-color: $colorVermelhoEscuro;
    }

    .buttonAcao{
        color: $colorBranca;
        background-color: $colorAzul;
    }

    .buttonAcao:hover{
        border: none;
        color: $colorBranca;
        background-color: $colorAzulEscuro;
    }
</style>