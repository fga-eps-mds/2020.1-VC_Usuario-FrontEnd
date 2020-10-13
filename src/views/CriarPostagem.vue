<template>

    <Header/>

    <section>
        <form @submit.prevent="criarPostagemAnonima" enctype="multipart/form-data">
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

                <!-- <progress class="baseElemento elementoProgress" value="70" max="100">Progress: 0%</progress> -->
            </div>

            <legend>Descrição</legend>
            <textarea class="inputDescricao" rows="5" cols="50" v-model="postagem.post_description" required></textarea>

            <div class="divPermissao">
                <fieldset>
                    <legend>Postagem anônima?</legend>
                    <div class="toggle">
                        <input type="radio" value="false" id="idPostNaoAnonimo" v-model="postagem.post_type"/>
                        <label for="idPostNaoAnonimo">Não</label>

                        <input type="radio" value="true" id="idPostSimAnonimo" v-model="postagem.post_type"/>
                        <label for="idPostSimAnonimo">Sim</label>   
                    </div>
                </fieldset>
            </div>
            <div class="divApresentarFeed">
                <fieldset>
                    <legend>Apresentar no Feed?</legend>
                    <div class="toggle">
                        <input type="radio" value=false id="idPostNaoFeed" v-model="postagem.post_permission"/>
                        <label for="idPostNaoFeed">Não</label>

                        <input type="radio" value=true id="idPostSimFeed" v-model="postagem.post_permission"/>
                        <label for="idPostSimFeed">Sim</label>   
                    </div>
                </fieldset>
            </div>
            
            <div class="divBotoes">
                <button type="submit">Criar</button>
                <button onclick='history.go(-1)'>Voltar</button>
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
    name: 'CriarPostagem',

    components: {
        Header,
        MenuBar
    },

    data(){
        return{
            postagem: {
                fk_user_id: '5f72b06dd02a450038c286f0',
                post_title: '',
                post_place: '',
                post_category: '',
                post_description: '',
                post_permission: 'true',
                post_type: 'false',
                file: ''
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

        criarPostagemAnonima(){

            console.log(this.postagem)
            const formData = new FormData();

            formData.append('fk_user_id', this.postagem.fk_user_id,)
            formData.append('post_title', this.postagem.post_title,)
            formData.append('post_place', this.postagem.post_place,)
            formData.append('post_category', this.postagem.post_category,)
            formData.append('post_description', this.postagem.post_description,)
            formData.append('post_permission', this.postagem.post_permission,)
            formData.append('file', this.postagem.file)

            if (this.postagem.post_type === "true"){  
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

            window.location.href = "http://localhost:8080";
        }
    }
}
</script>

<style scoped lang="scss">

    section{
        width: 100%;
        display: flex;
        border: 1px solid red;
    }

    form{
        height: auto;
        margin: 0 30px;
        min-width: 200px;
        width: 100%;
        border: 1px solid green;
        margin-top: 65px;
        min-height: 620px;
    }

    // @media only screen and (min-height:600px) {
    //     section{
    //         justify-content: center;
    //     }
    // }

    //     @media only screen and (min-width:500px){
    //     form{
    //         width: 440px;
    //         margin: auto;
    //     }
    // }

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
        border-bottom: 1px solid #DADDE0; 
    }

    .inputTitulo::placeholder {
        font-size: 20px;
        color: #000000;
    }

    // CATEGORIA E LOCAL
    .divCategoriaLocal{
        display: flex;

        height: 40px;
        margin-bottom: 20px;

        & select{
            width: 50%;

            border-radius: 10px;
            background-color: #ffffff;
            border: 1px solid #DADDE0;
        }

        select:first-child{
            margin-right: 20px;
        }
    }

    // SELECIONAR IMAGEM
    .divImagem{
        height: 35px;
        margin-bottom: 20px;
        border: 1px solid red;

        input[type=file]{
            display: none;
        }

        label{
            display: flex;
            background-color: #248722;
            color: white;
            border: 1px solid green;
            height: 35px;
            justify-content: center;
            align-items: center;
            border-radius: 25px;
            position: absolute;
            padding-right: 50px;
            padding-left: 50px;
        }
    }

    // DESCRIÇÃO
    .inputDescricao{
        height: 120px;
        width: 100%;
        margin-bottom: 20px;

        font-size: 16px;
        border-radius: 10px;
        border: 1px solid #DADDE0;
    }

    .inputDescricao::placeholder {
        font-size: 16px;
        color: #000000;
    }

    .divPermissao {
        margin-bottom: 20px;
    }

    .divApresentarFeed{
        margin-bottom: 20px;
    }

    // BOTÕES
    .divBotoes{
        display: flex;
        
        /* border: 1px solid blue; */

        & button{
            flex: 1;
            font-size: 20px;
            border: none;
            border-radius: 25px;
            height: 50px;
        }

        button:first-child{
            margin-right: 20px;
            color: #ffffff;
            background-color: #090673;
        }

        button:last-child{
            background-color: #ffffff;
            border: 1px solid #DADDE0;
        }
    }

    // //Configuração Radio Postagem Anonima

    // /* MIXINS */
    // @mixin hideInput {width: 0; height: 0; position: absolute; left: -9999px;}
    // @mixin breakpoint($point) {
    //     @if $point == 5000 {
    //         @media (max-width: 5000px) { @content ; }
    //     }
    // }

    // .divPermissao {
    //     display: flex;
    //     justify-content: space-between;
    // }

    // .divApresentarFeed {
    //     display: flex;
    //     justify-content: space-between;
    // }

    // fieldset {
    //     display: block;

    //     border: none;
    // }

    // legend {
    //         width: 100%; float: left; display: table;
    //         font-size: 15px; line-height: 140%; font-weight: 400; color: #000000;	
    //         + * {clear: both;}
    // }

    // body:not(:-moz-handler-blocked) fieldset {display: table-cell;}

    // .toggle {
    //     // width: 180px;
    //     // height: 40px;
    //     width: 100%;
    //     height: 45px;
    //     margin: 0; 
    //     box-sizing: border-box;
    //     font-size: 0;
    //     display: flex; flex-flow: row nowrap;
    //     justify-content: flex-start; align-items: stretch;

    //     input {@include hideInput;}

    //     input + label {
    //         margin: 0; padding: .75rem 2rem; box-sizing: border-box;
    //         position: relative; display: inline-block;
    //         border: solid 1px #DADDE0; background-color: #FFF;
    //         font-size: 1rem; line-height: 140%; font-weight: 600; text-align: center;
    //         box-shadow: 0 0 0 rgba(255,255,255,0);
    //         transition: border-color .15s ease-out, 
    //                     color .25s ease-out, 
    //                     background-color .15s ease-out,
    //                     box-shadow .15s ease-out;
            
    //         &:first-of-type {border-radius: 10px 0 0 10px; border-right: none;}
    //         &:last-of-type {border-radius: 0 10px 10px 0; border-left: none;}
    //     }

    //     input:hover + label {border-color:  #213140;}

    //     input:checked + label {
    //         background-color:  #090673;
    //         color: #FFF;
    //         border-color:  #090673;
    //     }

    //     @include breakpoint(5000) {
    //         input + label {
    //             padding: .75rem .25rem;
    //             flex: 0 0 50%;
    //             display: flex; justify-content: center; align-items: center;
    //         }
    //     }
    // }
</style>