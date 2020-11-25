<template>

    <HeaderComponent/>
    
    <section>
        <form @submit.prevent="criarPostagem" enctype="multipart/form-data">

            <h1>Criar Postagem</h1>

            <input class= "inputTitulo" type="text" placeholder="Título" v-model="postagem.post_title" required>

            <div class="divCategoriaLocal">
                <select v-model="postagem.post_category" required>
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

                <select v-model="postagem.post_place" required>
                    <option disabled value="">Local</option>
                    <option>FGA</option>
                    <option>DARCY</option>
                    <option>FCE</option>
                    <option>FUP</option>
                </select>
            </div>

            <div class="divImagem">
                <label for="file">Escolha sua imagem</label>                               
                <input type="file" ref="file" id="file" accept="image/png, image/jpeg" @change="imagemSelecionada">  
            </div>

            <div class="divDescricao">
                <legend>Descrição</legend>
                <textarea class="inputDescricao" rows="5" cols="50" v-model="postagem.post_description" required></textarea>
            </div>

            <div class="divPermissao">
                <legend>Postagem Anônima?</legend>
                <label v-if='$store.getters.getId != null' class="switch">
                    <input type="checkbox" id="postagem.post_type">
                    <span class="slider round"></span>
                </label>

                <label v-else class="switch" onclick="window.location.href='/Login'">
                    <input type="checkbox" id="postagem.post_type" checked>
                    <span class="slider round"></span>
                </label>
            </div>
            
            <div class="divBotoes">
                <button type="submit">Criar</button>
                <button onclick='history.go(-1)'>Voltar</button>
            </div>
        </form>
    </section>

    <MenuBarComponent/>

</template> 

<script>

import HeaderComponent from '@/components/HeaderComponent.vue'
import MenuBarComponent from '@/components/MenuBarComponent.vue'
import Postagem from '@/services/postagensServices.js'
/* eslint-disable */

export default {
    name: 'CriarPostagem',

    components: {
        HeaderComponent,
        MenuBarComponent
    },

    data(){
        return{
            postagem: {
                fk_user_id: '',
                post_title: '',
                post_place: '',
                post_category: '',
                post_description: '',
                post_permission: 'true',
                post_type: 'false',
                file: '',
                post_author: ''
            }
        }
    },
    
    methods:{

        imagemSelecionada(){

            this.postagem.file = this.$refs.file.files[0];
        },

        visualizarObjetoFormCriado(){
            
            console.log(this.postagem)
        },

        criarPostagem(){

            console.log(this.postagem)
            const formData = new FormData();

            formData.append('fk_user_id', this.$store.getters.getId,)
            formData.append('post_title', this.postagem.post_title,)
            formData.append('post_place', this.postagem.post_place,)
            formData.append('post_category', this.postagem.post_category,)
            formData.append('post_description', this.postagem.post_description,)
            formData.append('post_permission', this.postagem.post_permission,)
            formData.append('file', this.postagem.file,)
            formData.append('post_author', this.$store.getters.getNome)
            
            let checkbox = document.getElementById('postagem.post_type');
            if (checkbox.checked){  
                Postagem.criarPostagemAnonima(formData).then(resposta => {
                    console.log('Salvo com sucesso!')
                    console.log(resposta)
                })
            }else{
                Postagem.criarPostagem(formData).then(resposta => {
                    console.log('Salvo com sucesso!')
                    console.log(resposta)
                })
            }

            window.location.href = "/";
        }
    }
}
</script>

<style scoped lang="scss">
    @import "../assets/stylesheets/pallete.scss";
    @import "../assets/stylesheets/font.scss";

    section{
        width: 100%;
        padding-bottom: 100px;
        display: flex;
    }

    form{
        height: auto;
        width: 100%;
        margin: 0 30px;
        min-width: 200px;
        margin-top: 65px;

        & h1, legend{
            color: $colorAzulEscuro;
        }

        & legend{
            margin-bottom: 5px;
        }
    }

    .inputTitulo{
        box-shadow: 0 0 0 0;
        border: 0 none;
        outline: 0;
        display: block;

        height: 50px;
        width: 100%;
        padding: 0;
        margin: 20px 0;
        
        font-size: 18px;
        border-bottom: 1px solid $colorCinza; 
    }

    .inputTitulo::placeholder {
        font-size: 18px;
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

    .divImagem{
        height: 40px;
        margin-bottom: 20px;
        justify-items: center;
        position: relative;
        z-index: -1;


        input[type=file]{
            display: none;
        }

        label{
            display: flex;
            background-color: $colorAzul;
            align-items: center;
            justify-content: center;
            
            border-radius: 25px;
            height: 100%;
            width: 70%;
            position: absolute;
            
            transform: translate(21.5%, 0%);
            transition: .2s;

            color:white;
            text-align: center;
            font-family: $font-pattern;
            cursor: pointer;
        }
        label:hover{
            color: white;
            background: $colorAzulEscuro;
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
        display: flex;
        flex-direction: column;

        & button{
            height: 50px;
            width: 100%;
            
            border: none;
            border-radius: 25px;
            font-size: 20px;
            cursor: pointer;
        }

        button:first-child{
            margin-bottom: 20px;
            color: $colorBranca;
            background-color: $colorAzul;
        }
        
        button:first-child:hover{
            background-color: $colorAzulEscuro;
        }

        button:last-child{
            background-color: $colorBranca;
            border: 1px solid $colorCinza;
        }
        
        button:last-child:hover{
            background-color: $colorCinza;
        }
    }

    // Radio
    .divPermissao {
        margin-bottom: 20px;
        z-index: 0;

        & .switch {
            position: relative;
            display: inline-block;
            width: 60px;
            height: 34px;
        }

        & .switch input {
            opacity: 0;
            width: 0;
            height: 0;
        }

        & .slider {
            position: absolute;
            cursor: pointer;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background-color: $colorCinza;
            -webkit-transition: .4s;
            transition: .4s;
            z-index: -1;
        }

        & .slider:before {
            position: absolute;
            content: "";
            height: 26px;
            width: 26px;
            left: 4px;
            bottom: 4px;
            background-color: $colorBranca;
            -webkit-transition: .4s;
            transition: .4s;
        }

        & input:checked + .slider {
            background-color: $colorAzul;
        }

        & input:checked + .slider:before {
            -webkit-transform: translateX(26px);
            -ms-transform: translateX(26px);
            transform: translateX(26px);
        }

        & .slider.round {
            border-radius: 25px;
        }

        & .slider.round:before {
            border-radius: 50%;
        }
    }
</style>