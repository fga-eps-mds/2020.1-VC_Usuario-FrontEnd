<template>

    <Header/>
    <section>
        <form @submit.prevent="" enctype="multipart/form-data">
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
                <button @click="editarPostagem">Atualizar</button>
                <button>Cancelar</button>
                <button @click="excluirPostagem">Excluir</button>
            </div>
        </form>
    </section>

    <MenuBar/>
    
</template>

<script>
import Header from '@/components/Header.vue'
import MenuBar from '@/components/MenuBar.vue'
import Postagem from '@/services/postagens.js'

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
            }
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
        editarPostagem() {
            Postagem.editarUmaPostagem(this.editarPostagemObjeto).then(res => {
                window.location.href='http://localhost:8080/perfil'  
            })
        },

        excluirPostagem(){
            Postagem.excluirUmaPostagem(this.excluirPostagemObjeto).then(res => {
                window.location.href='http://localhost:8080/perfil'  
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
    }

    header{
        margin-bottom: 20px;
    }

    form{
        height: auto;
        margin: 0 30px;
        min-width: 200px;
        width: 100%;
        margin-top: 65px;
        min-height: 620px;
    }

    // TÍTULO
    .inputTitulo{
        box-shadow: 0 0 0 0;
        border: 0 none;
        outline: 0;
        display: block;

        padding: 0;

        height: 50px;
        margin-bottom: 20px;
        width: 100%;

        font-size: 20px;
        border-bottom: 1px solid $colorCinza; 
    }

    .inputTitulo::placeholder {
        font-size: 20px;
        color: $colorPreta;
    }

    // CATEGORIA E LOCAL
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
            border-radius: 15px;
        }

        & button:first-child{
            border: none;
            background-color: $colorAzul;
            color: #ffffff;
        }

        & button:first-child:hover{
            background-color:$colorAzulEscuro;
        }

        & button:nth-child(even){
            background-color: #ffffff;
            border: 1px solid $colorCinza;
        }

        & button:nth-child(even):hover{
            background-color:$colorCinza;
        }

        & button:last-child{            
            color: $colorVermelho;
            background-color: #ffffff;
            border: 1px solid $colorCinza;
        }

        & button:last-child:hover{
            color: #ffffff;
            background-color: $colorVermelho;
        }
    }
</style>